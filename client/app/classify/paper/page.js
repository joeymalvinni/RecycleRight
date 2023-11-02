import Classifier from '../../../components/Information';
import Image from 'next/image';

export default function Paper({ params }) {
    return (
        <div className="flex justify-center h-screen pt-12">
            <Classifier
                alt={'Paper image'}
                uppercase={'Paper'}
                type={'paper'}
                html={
                    <div className="grid grid-cols-3">
                        <div className="relative w-[90%] mr-3 mt-5">
                            <Image
                                src="/cardboard.jpg"
                                width="640"
                                height="427"
                            />
                            <p className="mt-2">Corrugated cardboard is <span className="font-bold">recycleable</span>, but must be clean, dry, and free of packing tape.</p>
                        </div>
                        <div className="relative w-[90%] mr-3 mt-5">
                            <Image
                                src="/office_paper.jpg"
                                width="640"
                                height="427"
                            />
                            <p className="mt-2">Office paper is <span className="font-bold">recycleable</span>, but must be clean & dry to be recycled.</p>
                        </div>
                        <div className="relative w-[90%] mr-3 mt-5">
                            <Image
                                src="/paper_bag.jpg"
                                width="640"
                                height="427"
                            />
                            <p className="mt-2">Paper bags are <span className="font-bold">recycleable</span>, but must be clean & dry.</p>
                        </div>
                        <div className="relative w-[90%] mr-3 mt-5">
                            <Image
                                src="/toilet_paper_tubes.jpg"
                                width="640"
                                height="427"
                            />
                            <p className="mt-2">Toilet paper tubes are <span className="font-bold">recycleable</span>, but must be clean & dry.</p>
                        </div>
                        <div className="relative w-[90%] mr-3 mt-5">
                            <Image
                                src="/newspaper.jpg"
                                width="640"
                                height="427"
                            />
                            <p className="mt-2">Newspapers are <span className="font-bold">recycleable</span>, but must be clean & dry.</p>
                        </div>
                        <div className="relative w-[90%] mr-3 mt-5">
                            <Image
                                src="/shredded_paper.jpg"
                                width="640"
                                height="427"
                            />
                            <p className="mt-2">Shredded paper is <span className="font-bold">recycleable</span>, but should be put in a small paper bag or box.</p>
                        </div>
                    </div>

                }
                links={
                    <div>
                        <li className="underline text-blue-600 hover:text-blue-800"><a href="https://www.afandpa.org/priorities/recycling">American Forest and Paper Association</a></li>
                        <li className="underline text-blue-600 hover:text-blue-800"><a href="https://earth911.com/recycling-guide/how-to-recycle-paper/">Earth911</a></li>
                    </div>
                }
            />
        </div>
    )
}