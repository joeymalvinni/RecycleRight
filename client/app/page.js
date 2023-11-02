"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { Inter } from 'next/font/google';

const inter = Inter({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"]
});

export default function Home() {
    const router = useRouter();
    const handleUpload = async (file) => {
        const formData = new FormData();
        formData.append('image', file);
        try {
            // request to Flask api
            const response = await fetch('http://localhost:5000/classify', {
                method: 'POST',
                body: formData,
            });
            
            if (response.ok) {
                const data = await response.json();
                if (data.type.includes("glass")) {
                    router.push(`${window.location}/classify/glass/${data.image}`);
                } else if (data.type == "cardboard") {
                    router.push(`${window.location}/classify/paper/${data.image}`);
                }else {
                    router.push(`${window.location}/classify/${data.type}/${data.image}`);
                }
            } else {
                console.error('Failed to upload and classify the image.');
            }
        } catch (error) {
        console.error('Error:', error);
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            handleUpload(file);
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center p-24 pt-24">
            <h1 className={`text-5xl font-bold ${inter.className}`}>
                Recycle <span className="text-green-700">Right</span>.
            </h1>
            <h2 className="mt-5">
                Empowering the future of recycling, one piece of trash at a time.
            </h2>

            <div className="relative mt-24">
                <form
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    onDragEnter={(e) => e.preventDefault()}
                    onDragLeave={(e) => e.preventDefault()}
                    className="mt-3"
                    encType="multipart/form-data"
                >
                    <div className="max-w-xl">
                    <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                        <span className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span className="font-medium text-gray-600">Drop files to classify, or <span className="text-blue-600 underline">browse files</span></span>
                        </span>
                        <input type="file" name="file_upload" id="file_upload" className="hidden" />
                    </label>
                    </div>
                </form>
            </div>
        </main>
    );
}