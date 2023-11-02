import Classifier from '../../../components/Information';
import Image from 'next/image';

export default function Battery({ params }) {
    return (
        <div className="flex justify-center h-screen pt-12">
            <Classifier
                image={params.image}
                alt={'Battery image'}
                uppercase={'Battery'}
                type={'a battery'}
                html={
                    <div className="grid grid-cols-2">
                        <div className="relative w-[90%] mr-3 mt-5">
                            <Image
                                src="/household_batteries.jpg"
                                width="640"
                                height="427"
                            />
                            <p className="mt-2">Common household batteries are considered <span className="font-bold">Electronic Waste</span>, which can be recycled. Electronic waste should be put in a clear bag on top of your recycling cart.</p>
                        </div>
                        <div className="relative w-[90%] mr-3 mt-5">
                            <Image
                                src="/car_battery.jpg"
                                width="640"
                                height="427"
                            />
                            <p className="mt-2">Other automotive batteries are <span className="font-bold">Electronic Waste</span>, but batteries above 9v are dangerous for waste haulers. Exchange your old battery when you buy a new one. State law requires that lead-acid battery retailers accept old batteries when a new battery is sold.</p>
                        </div>
                    </div>
                }
                links={
                    <div>
                        <li className="underline text-blue-600 hover:text-blue-800"><a href="https://dtsc.ca.gov/management-of-spent-lead-acid-batteries/">Department of Toxic Substances Control</a></li>
                        <li className="underline text-blue-600 hover:text-blue-800"><a href="https://www.gpi.org/glass-recycling-facts">Glass Packaging Institute</a></li>
                        <li className="underline text-blue-600 hover:text-blue-800"><a href="https://earth911.com/recycling-guide/how-to-recycle-glass-bottles-jars/">Earth911</a></li>
                    </div>
                }
            />
        </div>
    )
}