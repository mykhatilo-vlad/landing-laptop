'use client';

import content from '../../data/content.json';
import { WrapInView } from '../WrapInView';

const {spec} = content;

export const Spec = () => {

    return (
        <section className="bg-light py-16 lg:py-24">
            <div className="container">
                
                <WrapInView as="div" classes={['opacity-0', 'translate-y-10']} className="text-center mb-16 duration-300">
                    <h2 className="text-gray">{spec.heading}</h2>
                    <p className="text-xl leading-7">{spec.desc}</p>
                </WrapInView>

                <ul className="bg-white rounded-lg shadow-lg p-8 grid gap-6 max-w-224 mx-auto">
                    {spec.rows.map(({title, info, id}) => {
                        return (
                            <li key={id} className="py-4 flex items-center gap-3 justify-between border-b border-b-gray-border last:border-b-0">
                                <WrapInView as="strong" classes={['opacity-0', '-translate-x-10']} className="text-gray text-xl leading-7 font-semibold duration-300">{title}</WrapInView>
                                <WrapInView as="span" classes={['opacity-0', 'translate-x-10']} className="leading-6 text-right duration-300">{info}</WrapInView>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}