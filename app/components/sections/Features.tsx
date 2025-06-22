'use client';

import content from '../../data/content.json';
import { FeaturedCard } from '../cards';
import { WrapInView } from '../WrapInView';

const {features} = content;

export const Features = () => {

    return (
        <section className="py-16 lg:py-24">
            <div className="container">
                <WrapInView as="div" classes={['opacity-0', 'translate-y-5']} className="mb-16 text-center duration-300">
                    <h2 className="text-gray mb-4">{features.heading}</h2>

                    <p className="text-xl leading-[1.4] max-w-192 mx-auto">{features.desc}</p>
                </WrapInView>

                <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                    {features.cards.map((card, index) => {
                        return (
                            <WrapInView key={card.id} as="div" classes={['opacity-0', 'translate-y-10']} className="duration-300 grid" style={{ transitionDelay: `${(index % 2 === 0 ? 0 : 1) * 100}ms` }}>
                                <FeaturedCard {...card} />
                            </WrapInView>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}