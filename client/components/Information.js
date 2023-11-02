"use client"

import React from 'react';
import { useState, useEffect } from 'react';

function Information(props) {
    // Allows pages to be hydrated dynamically
    const [isSSR, setIsSSR] = useState(true);

    useEffect(() => {
        setIsSSR(false);
    }, []);
    return (
        <div className={`grid grid-cols-2 gap-4 w-[${props.width || "60%"}] pl-24 ${props.margin || "ml-24"} columns-2`}>
            <div className="col-span-1 justify-center">
                <p className="text-2xl align-middle mb-1">Handling {props.type}</p>
                <div className="w-[100%] mt-2">{!isSSR && props.html}</div>
            </div>
            <div className="col-span-1 flex flex-wrap self-start flex-col w-[60%]">
                <h3 className="text-2xl relative flex-wrap">Additional Resources:</h3>
                <ul className="mt-2 block flex-wrap">
                    {props.links}
                </ul>
            </div>
      </div>
    );
}

export default Information;