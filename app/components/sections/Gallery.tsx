'use client';

import { gallery } from '../../data/content.json';
import { useState } from 'react';

export const Gallery = () => {
    const popoverId = 'gallery-popover';
    const [openImage, setOpenImage] = useState<string | null>(null);

    function handleOpen(src: string) {
        setOpenImage(src);
    }

    return (
        <section className="py-16 lg:py-24">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-gray mb-4">{gallery.heading}</h2>
                    <p className="text-xl leading-7 max-w-192 mx-auto">{gallery.desc}</p>
                </div>

                <div className="grid gap-6 grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))]">
                    {gallery.photos.map((src, index) => {
                        return (
                            <button key={index} popoverTarget={popoverId} onClick={() => handleOpen(src)} className="transition-all hover:-translate-y-2 focus-visible:-translate-y-2">
                                <img src={src} alt="gallery photo" className="rounded-lg shadow-lg object-cover" />
                            </button>
                        );
                    })}
                </div>
            </div>

            <div popover="auto" id={popoverId} className=" bg-transparent backdrop:bg-blue-dark/80 open:flex items-center justify-center m-auto">
                <button popoverTarget={popoverId} className="fixed top-2 right-2 font-medium text-sm text-white hover:scale-110 focus-visible:scale-110">Close</button>
                {openImage && <img src={openImage} alt="Opened image" className="rounded-lg shadow-lg max-h-[90dvh] max-w-[90vw] object-contain" />}
            </div>
        </section>
    );
}