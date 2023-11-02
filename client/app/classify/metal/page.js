import Classifier from '../../../components/Information';
import Image from 'next/image';

export default function Metal({ params }) {
    return (
        <div className="flex justify-center h-screen pt-12">
            <Classifier
                alt={'Metal image'}
                uppercase={'Metal'}
                type={'metal'}
                html={
                    <div className="grid grid-cols-3">
                        <div className="relative w-[90%] mr-3 mt-5">
                            <Image
                                src="/aluminum_can.jpg"
                                width="640"
                                height="427"
                                alt="Aluminum can"
                            />
                        <p className="mt-2">Aluminum cans are <span className="font-bold">recycleable</span>, but must be clean & dry to be recycled.</p>
                        </div>
                        <div className="relative w-[90%] mr-3 mt-5">
                            <Image
                                src="/tin_can.jpg"
                                width="640"
                                height="427"
                                alt="Tin can"
                            />
                            <p className="mt-2">Tin cans are <span className="font-bold">recycleable</span>, and must be clean & dry.</p>
                        </div>
                        <div className="relative w-[90%] mr-3 mt-5">
                            <Image
                                src="/aluminum_foil_ball.jpg"
                                width="640"
                                height="427"
                                alt="Aluminum foil"
                            />
                            <p className="mt-2">Aluminum foil is <span className="font-bold">recycleable</span>. Try to reuse foil before recycling.</p>
                        </div>
                        <div className="relative w-[90%] mr-3 mt-5">
                            <Image
                                src="/flatware.jpg"
                                width="640"
                                height="427"
                                alt="Flatware"
                            />
                            <p className="mt-2">Flatware is <span className="font-bold">recycleable</span>. Try to donate before recycling.</p>
                        </div>
                        <div className="relative w-[90%] mr-3 mt-5">
                            <Image
                                src="/cds.jpg"
                                width="640"
                                height="427"
                                alt="CDs"
                            />
                            <p className="mt-2">CDs are <span className="font-bold">not recycleable</span>. Try to donate or repurpose dics for craft projects before throwing them out.</p>
                        </div>
                        <div className="relative w-[90%] mr-3 mt-5">
                            <Image
                                src="/pots_and_pans.jpg"
                                width="640"
                                height="427"
                                alt="Pots and Pans"
                            />
                            <p className="mt-2">Pots and pans are <span className="font-bold">recycleable</span>. Plastic handles are fine.</p>
                        </div>
                    </div>
                }
                links={
                    <div>
                        <li className="underline text-blue-600 hover:text-blue-800"><a href="https://dtsc.ca.gov/scrap-metal-recycling-regulatory-oversight/">DTSC</a></li>
                        <li className="underline text-blue-600 hover:text-blue-800"><a href="https://earth911.com/recycling-guide/how-to-recycle-metal/">Earth911</a></li>
                    </div>
                }
            />
        </div>
    )
}