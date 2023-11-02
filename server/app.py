from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os
import tensorflow as tf
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app)

app.config['UPLOAD_FOLDER'] = '../client/public/'
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg', 'gif'}

category_labels = [
    'paper', 'cardboard', 'plastic', 'metal', 'trash',
    'battery', 'shoes', 'clothes', 'green-glass', 'brown-glass',
    'white-glass', 'biological'
]

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

def load_model(model_file):
    model = tf.keras.models.load_model(model_file, safe_mode=False)
    return model

model = load_model('model.keras')

@app.route('/classify', methods=['POST'])
def classify_image():
    if 'image' not in request.files:
        app.logger.error('no file')
        return jsonify({"error": "No file part"}), 400

    file = request.files['image']

    if file.filename == '':
        app.logger.error('no selected file')
        return jsonify({"error": "No selected file"}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        image_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)

        try:
            image = tf.keras.preprocessing.image.load_img(image_path, target_size=(224, 224))
            image = tf.keras.preprocessing.image.img_to_array(image)
            image = tf.keras.applications.resnet50.preprocess_input(image)
            image = tf.expand_dims(image, axis=0)

            predictions = model.predict(image)

            # Interpret the results
            print(predictions)
            predicted_class_index = np.argmax(predictions)
            predicted_class_label = category_labels[predicted_class_index]

            return jsonify({"type": predicted_class_label, "image": filename})
        except Exception as e:
            return jsonify({"error": str(e)}), 500
    else:
        app.logger.error('illegal file type')
        return jsonify({"error": "File type not allowed"}), 400

app.run(debug=True)