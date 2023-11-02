import Classifier from '../../../../components/Classifier';
import Image from 'next/image';

export default function Glass({ params }) {
    return (
        <div className="flex justify-center h-screen pt-12">
            <Classifier
                image={params.image}
                alt={'Glass image'}
                uppercase={'Glass'}
                type={'glass'}
                html={
                    <div className="grid grid-cols-2">
                        <div className="relative w-[90%] mr-3 mt-5">
                            <Image
                                src="/glass_bottles.jpg"
                                width="640"
                                height="427"
                            />
                            <p className="mt-2">Brown bottles are <span className="font-bold">recycleable</span>, but must be clean & dry to be recycled.</p>
                        </div>
                        <div className="relative w-[90%] mr-3 mt-5">
                            <Image
                                src="/glass_jars.jpg"
                                width="640"
                                height="427"
                            />
                            <p className="mt-2">Glass jars are <span className="font-bold">recycleable</span>, but must be clean & dry to be recycled.</p>
                        </div>
                        <div className="relative w-[90%] mr-3 mt-5">
                            <Image
                                src="/drinking_glasses.jpg"
                                width="640"
                                height="427"
                            />
                            <p className="mt-2">Tempered drinking glasses are chemically treated, which means they <span className="font-bold">are not recycleable</span> and should be disposed of in the trash.</p>
                        </div>
                        <div className="relative w-[90%] mr-3 mt-5">
                            <Image
                                src="/incandescent_bulb.jpg"
                                width="640"
                                height="427"
                            />
                            <p className="mt-2">Incandescent light bulbs contain wire filamentrs which <span className="font-bold">are not recycleable</span> and should be disposed of in the trash.</p>
                        </div>
                    </div>
                }
                links={
                    <div>
                        <li className="underline text-blue-600 hover:text-blue-800"><a href="https://calrecycle.ca.gov/glass/">CalRecycle</a></li>
                        <li className="underline text-blue-600 hover:text-blue-800"><a href="https://www.gpi.org/glass-recycling-facts">Glass Packaging Institute</a></li>
                        <li className="underline text-blue-600 hover:text-blue-800"><a href="https://earth911.com/recycling-guide/how-to-recycle-glass-bottles-jars/">Earth911</a></li>
                    </div>
                }
            />
        </div>
    )
}