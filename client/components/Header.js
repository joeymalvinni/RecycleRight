import React from 'react';
import Link from 'next/link';

function Header() {
    return (
        <div className="w-screen fixed top-0 left-0 flex items-center h-[90px] pl-24 pr-24 justify-between shadow-md">
            <Link href="/" className="font-bold text-2xl text-black">Recycle<span className="text-green-700">Right</span></Link>
            <ul className="flex space-x-8 justify-between">
                <li><Link className="text-black hover:text-gray-800" href="/classify/battery">Batteries</Link></li>
                <li><Link className="text-black hover:text-gray-800" href="/classify/bio">Biological Waste</Link></li>
                <li><Link className="text-black hover:text-gray-800" href="/classify/glass">Glass</Link></li>
                <li><Link className="text-black hover:text-gray-800" href="/classify/metal">Metal</Link></li>
                <li><Link className="text-black hover:text-gray-800" href="/classify/paper">Paper</Link></li>
                <li><Link className="text-black hover:text-gray-800" href="/classify/plastic">Plastic</Link></li>
                <li><Link className="text-black hover:text-gray-800" href="/classify/trash">Trash</Link></li>
            </ul>
        </div>
    );
}

export default Header;