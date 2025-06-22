import { HTMLAttributes, FC } from 'react';
import content from '../../data/content.json';

const {buyUrl} = content;

type ComponentProps = HTMLAttributes<HTMLAnchorElement>;

export const ButtonBuy: FC<ComponentProps> = ({children, className, ...props}) => {
    return (
        <a className={`button ${className}`} {...props} href={buyUrl} target="_blank">{children}</a>
    );
}