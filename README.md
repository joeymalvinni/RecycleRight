# RecycleRight
♻️ Inspiring eco-consciousness in students through waste classification and educational resources

# Installation
RecycleRight is split up into 3 seperate parts. 

`/notebook`: the Jupyter Notebook which trains the ML model on the given dataset. <br>
`/server`: the Python Flask API which classifies images using the ML model. <br>
`/client`: the Next.js frontend that users interact with.

First, clone the github repository and unpack it to the working directory:
```bash
git clone https://github.com/joeymalvinni/RecycleRight.git
cd RecycleRight
```

## Client
Install all Next.js dependencies.
```bash
npm install
```
From here, you can either run the developement server to test out the frontend or build for production using `npm run build`.

## Server
Install using the requirements file. 
```bash
pip install -r requirements.txt
```

## Notebook
Run the Jupyter Notebook to create the `model.keras` file. Here are some images taken from the notebook:

![training and validation loss and accuracy](/assets/val_loss_and_acc.png) <br>
Results for training and validation loss/accuracy over time.

![final accuracy of model](/assets/final_accuracy.png) <br>
Final accuracy of the model.

# License
```
MIT License

Copyright (c) 2023 Joey Malvinni

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
