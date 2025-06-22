'use client';

import content from '../../data/content.json';
import { useState } from 'react';
import { WrapInView } from '../WrapInView';

const {gallery} = content;

export const Gallery = () => {
    const popoverId = 'gallery-popover';
    const [openImage, setOpenImage] = useState<string | null>(null);

    function handleOpen(src: string) {
        setOpenImage(src);
    }

    return (
        <section className="py-16 lg:py-24">
            <div className="container">
                <WrapInView as="div" classes={['opacity-0', 'translate-y-10']} className="text-center mb-16 duration-300">
                    <h2 className="text-gray mb-4">{gallery.heading}</h2>
                    <p className="text-xl leading-7 max-w-192 mx-auto">{gallery.desc}</p>
                </WrapInView>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {gallery.photos.map((src, index) => {
                        const classes: Record<number, string> = {
                            0: 'sm:row-span-3',
                            7: 'sm:col-start-1 sm:row-start-4 sm:row-span-2',
                            8: 'sm:row-span-2',
                            4: 'sm:col-start-2 lg:col-start-3',
                            5: 'sm:col-start-2 lg:col-start-3',
                            6: 'lg:col-start-2 lg:row-start-3'
                        }

                        return (
                            <WrapInView as="button" classes={['opacity-0', 'translate-y-10']} key={index} popoverTarget={popoverId} onClick={() => handleOpen(src)} 
                                className={`transition-all hover:-translate-y-2 focus-visible:-translate-y-2 duration-300 ${classes[index] || ''}`}>
                                <img src={src} alt="gallery photo" className="rounded-lg shadow-lg object-cover h-full" />
                            </WrapInView>
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