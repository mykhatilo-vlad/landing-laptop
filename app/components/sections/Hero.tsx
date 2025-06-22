'use client';

import content from '../../data/content.json';
import { Subtitle } from "../Subtitle";
import { ButtonBuy } from '../buttons';
import { WrapInView } from '../WrapInView';

const {hero} = content;

export const Hero = () => {
    return (
        <section className="bg-(image:--gradient-gray-light) py-12 lg:py-24">
            <div className="container grid lg:grid-cols-2 gap-5 lg:gap-12 items-center">
                <WrapInView as="div" classes={['-translate-x-10', 'opacity-0']} className="transition-all duration-500">
                    <Subtitle>{hero.subtitle}</Subtitle>

                    <h1 className="mt-4 text-gray">{hero.heading.main} <span className="text-blue">{hero.heading.highlight}</span></h1>

                    <p className="mt-4 text-xl leading-[1.6]">{hero.copy}</p>

                    <div className="mt-8"><ButtonBuy className="text-lg lg:px-8">{hero.buttonLabel}</ButtonBuy></div>
                </WrapInView>
                <div className="grid grid-cols-2 gap-4 items-center">
                    {hero.image.map((src, index) => {
                        return <WrapInView key={index} as="div" classes={['opacity-0', 'translate-y-10']} className={`duration-500`} style={{transitionDelay: `${index * 100}ms`}}>
                            <img src={src} alt="image" className="rounded-2xl shadow-2xl" />
                        </WrapInView>;
                    })}
                </div>
            </div>
        </section>
    );
}