import Classifier from '../../../components/Information';
import Image from 'next/image';

export default function Plastic({ params }) {
    return (
        <div className="flex justify-center h-screen pt-12">
            <Classifier
                alt={'Plastic image'}
                uppercase={'Plastic'}
                type={'plastic'}
                width={"90%"}
                margin={"ml-[20%]"}
                html={
                    <div className="grid grid-cols-5">
                        <div className="relative w-[95%] mr-3 mt-5">
                            <Image
                                src="/plastic_beverage_bottles.jpg"
                                width="640"
                                height="427"
                            />
                            <p className="mt-2">Plastic beverage bottles are <span className="font-bold">recycleable</span>, but must be clean & dry to be recycled.</p>
                        </div>
                        <div className="relative w-[95%] mr-3 mt-5">
                            <Image
                                src="/milk_jugs.jpg"
                                width="640"
                                height="427"
                            />
                            <p className="mt-2">Plastic milk jugs are <span className="font-bold">recycleable</span>, and have to be clean & dry.</p>
                        </div>
                        <div className="relative w-[95%] mr-3 mt-5">
                            <Image
                                src="/detergent_bottles.jpg"
                                width="640"
                                height="427"
                            />
                            <p className="mt-2">Laundry detergent bottles are <span className="font-bold">recycleable</span>, but must be clean & dry to be recycled.</p>
                        </div>
                        <div className="relative w-[95%] mr-3 mt-5">
                            <Image
                                src="/plastic_cleaning_bottles.jpg"
                                width="640"
                                height="427"
                            />
                            <p className="mt-2">Plastic cleaning bottles are <span className="font-bold">recycleable</span>, and have to be be clean & dry.</p>
                        </div>
                        <div className="relative w-[95%] mr-3 mt-5">
                            <Image
                                src="/empty_pill_bottles.jpg"
                                width="640"
                                height="427"
                            />
                            <p className="mt-2">Empty pill bottles are <span className="font-bold">not recycleable</span>, and should be disposed of in the trash.</p>
                        </div>
                        <div className="relative w-[95%] mr-3 mt-5">
                            <Image
                                src="/plastic_bag.jpg"
                                width="640"
                                height="427"
                            />
                            <p className="mt-2">Plastic bags and other film plastics are <span className="font-bold">not recycleable</span>, and should be disposed of in the trash.</p>
                        </div>
                        <div className="relative w-[95%] mr-3 mt-5">
                            <Image
                                src="/plastic_truck.jpg"
                                width="640"
                                height="427"
                            />
                            <p className="mt-2">Plastic toys are <span className="font-bold">recycleable</span>. Make sure to remove batteries prior to recycling the toy.</p>
                        </div>
                        <div className="relative w-[95%] mr-3 mt-5">
                            <Image
                                src="/styrofoam.png"
                                width="640"
                                height="427"
                            />
                            <p className="mt-2">Styrofoam is <span className="font-bold">not recycleable</span>, because it breaks apart easily.</p>
                        </div>
                        <div className="relative w-[95%] mr-3 mt-5">
                            <Image
                                src="/cold_plastic_cup.jpg"
                                width="640"
                                height="427"
                            />
                            <p className="mt-2">Plastic bevarage cups are <span className="font-bold">not recycleable</span>, as they are generally contaminated with linquids.</p>
                        </div>
                    </div>
                }
                links={
                    <div>
                        <li className="underline text-blue-600 hover:text-blue-800"><a href="https://calrecycle.ca.gov/plastics/">CalRecycle</a></li>
                        <li className="underline text-blue-600 hover:text-blue-800"><a href="https://earth911.com/recycling-guide/how-to-recycle-plastic-bags/">Earth911</a></li>
                    </div>
                }
            />
        </div>
    )
}