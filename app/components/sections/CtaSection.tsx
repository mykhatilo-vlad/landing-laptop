'use client';

import content from '../../data/content.json';
import { ButtonBuy } from '../buttons';
import { WrapInView } from '../WrapInView';

const {cta} = content;

export const CtaSection = () => {

    return (
        <section className="py-16 lg:py-24 bg-(image:--gradient-blue-light)">
            <WrapInView as="div" classes={['opacity-0', 'translate-y-10']} className="container max-w-224 text-center text-white duration-300">
                <h2 className="mb-8">{cta.heading}</h2>
                <p className="mb-8 text-xl leading-8">{cta.copy}</p>
                <ButtonBuy className="mt-8 px-8 text-lg bg-white text-blue hover:bg-blue-lighter">{cta.buttonLabel}</ButtonBuy>
            </WrapInView>
        </section>
    );
}