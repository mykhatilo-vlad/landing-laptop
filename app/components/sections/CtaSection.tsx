import {cta} from '../../data/content.json';
import { ButtonBuy } from '../buttons';


export const CtaSection = () => {

    return (
        <section className="py-16 lg:py-24 bg-(image:--gradient-blue-light)">
            <div className="container text-center text-white">
                <h2 className="mb-8">{cta.heading}</h2>
                <p className="mb-8 text-xl leading-8">{cta.copy}</p>
                <ButtonBuy className="mt-8 px-8 text-lg bg-white text-blue hover:bg-blue-lighter">{cta.buttonLabel}</ButtonBuy>
            </div>
        </section>
    );
}