import Classifier from '../../../../components/Classifier';
import Image from 'next/image';

export default function Trash({ params }) {
    return (
        <div className="flex justify-center h-screen pt-12">
            <Classifier
                image={params.image}
                alt={'Trash image'}
                uppercase={'Trash'}
                type={'trash'}
                html={
                    <div>
                        <h1>"Trash is anything that cannot be placed in the blue recycling, green greenwaste, or yellow foodscraps bins, and which also cannot be given away."</h1>
                        <h1 class="text-2xl mt-5">Container Sizes & Frequencies</h1>
                        <p className="mt-3">Trash containers are available in the following sizes:</p>
                        <ul className="list-disc ml-6 mt-3 mb-5">
                            <li>Cans: 32 gal</li>
                            <li>Carts (with wheels): 35 gal, 65 gal, 95 gal</li>
                            <li>Dumpsters: 1.5, 2, 3, 4 cubic yards</li>
                        </ul>
                        <Image
                            src="/container_size.jpg"
                            width="640"
                            height="427"
                        />
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