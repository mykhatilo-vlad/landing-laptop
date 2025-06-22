import content from '../data/content.json';
import { ButtonBuy } from './buttons';

const {header} = content;

export default function Header() {
    return (
        <header className="py-3 border-b border-b-gray-border">
            <div className="container flex items-center justify-between gap-4">
                <span className="text-blue text-2xl font-bold">{header.title}</span>
                <ButtonBuy>Buy Now</ButtonBuy>
            </div>
        </header>
    );
}