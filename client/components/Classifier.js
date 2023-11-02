"use client"

import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

function ClassifyPage(props) {
    // Allows pages to be hydrated dynamically
    const [isSSR, setIsSSR] = useState(true);

    useEffect(() => {
        setIsSSR(false);
    }, []);
    return (
        <div className="grid grid-cols-3 gap-4 w-[90%]">
            <div className="col-span-1 pt-2 justify-center flex self-start flex-wrap">
                <Image
                    src={`/${props.image}`}
                    width={256}
                    height={256}
                    alt={props.alt}
                    className="relative rounded-md drop-shadow-2xl w-[90%] flex-wrap"
                />
                <p className="mt-4">Your image.</p>
            </div>
            <div className="col-span-1 justify-center">
                <p className="text-2xl align-middle mb-1">This item is {props.type}.</p>
                <p className="w-[90%] mt-2">{!isSSR && props.html}</p>
            </div>
            <div className="col-span-1 justify-center">
                <h3 className="text-2xl">Additional Resources:</h3>
                <ul className="mt-2">
                    {props.links}
                </ul>
            </div>
      </div>
    );
}

export default ClassifyPage;