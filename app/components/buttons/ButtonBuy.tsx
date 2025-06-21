import { HTMLAttributes, FC } from 'react';
import {buyUrl} from '../../data/content.json';

type ComponentProps = HTMLAttributes<HTMLAnchorElement>;

export const ButtonBuy: FC<ComponentProps> = ({children, className, ...props}) => {
    return (
        <a className={`button ${className}`} {...props} href={buyUrl} target="_blank">{children}</a>
    );
}