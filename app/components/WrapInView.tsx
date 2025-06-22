import { ElementType, FC, ReactNode, ComponentPropsWithoutRef } from 'react';
import {InView, InViewHookResponse} from 'react-intersection-observer';

type ComponentProps  = {
    classes: string[],
    children: ReactNode,
    className?: string,
    as: (ElementType<any> & string) | undefined,
}

type HandleInViewParams = (
    inView: InViewHookResponse['inView'],
    entry: InViewHookResponse['entry'],
) => void;

export const WrapInView: FC<ComponentProps & ComponentPropsWithoutRef<'div'>> = ({classes, className = '', as, children, ...props}) => {

    const handleInView: HandleInViewParams = (inView, entry) => {
        if(inView) {
            entry?.target.classList.remove(...classes);
        }
    }

    const classList = [...classes, className].join(' ');

    return (
        <InView {...props} as={as} className={classList} onChange={handleInView} threshold={0.5}>{children}</InView>
    );
}