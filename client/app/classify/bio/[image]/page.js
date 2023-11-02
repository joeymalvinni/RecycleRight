import Classifier from '../../../../components/Classifier';
import Image from 'next/image';

export default function Biological({ params }) {
    return (
        <div className="flex justify-center h-screen pt-12">
            <Classifier
                image={params.image}
                alt={'Biological image'}
                uppercase={'Biological Waste'}
                type={'Biological Waste'}
                html={
                    <div>
                        <p>Composting your food scraps through methods like mulching and composting is an eco-friendly way to reduce waste. This sustainable practice helps reduce waste, and alos provides nutrient-rich soil that can improve plant growth. Additionally, you can place green waste in the designated green waste bin to ensure proper disposal of this waste.</p>
                    </div>
                }
                links={
                    <div>
                        <li className="underline text-blue-600 hover:text-blue-800"><a href="https://calrecycle.ca.gov/nav/organics/">CalRecycle</a></li>
                        <li className="underline text-blue-600 hover:text-blue-800"><a href="https://calrecycle.ca.gov/organics/food/faq/#Compost">CalRecycle Composting</a></li>
                        <li className="underline text-blue-600 hover:text-blue-800"><a href="https://www.usda.gov/peoples-garden/food-access-food-waste/composting">USDA</a></li>
                    </div>
                }
            />
        </div>
    )
}