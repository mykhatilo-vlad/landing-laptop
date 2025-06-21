import {features} from '../../data/content.json';
import {FeaturedCard} from '../cards';

export const Features = () => {

    return (
        <section className="py-16 lg:py-24">
            <div className="container">
                <div className="mb-16 text-center">
                    <h2 className="text-gray mb-4">{features.heading}</h2>

                    <p className="text-xl leading-[1.4] max-w-192 mx-auto">{features.desc}</p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                    {features.cards.map((card) => <FeaturedCard key={card.id} {...card} />)}
                </div>
            </div>
        </section>
    )
}