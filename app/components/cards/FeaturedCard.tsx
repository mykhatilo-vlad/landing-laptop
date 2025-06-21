import {FC, ReactElement} from 'react';

import {Monitor, Cpu, Battery, HardDrive} from 'lucide-react';

type CardProps = {
    icon: string,
    title: string,
    copy: string,
}

type IconsType = Record<string, ReactElement>;

const ICONS: IconsType = {
    monitor: <Monitor className="w-8 h-8" />,
    cpu: <Cpu className="w-8 h-8" />,
    battery: <Battery className="w-8 h-8" />,
    hardDrive: <HardDrive className="w-8 h-8" />
}

export const FeaturedCard: FC<CardProps> = ({icon, title, copy}) => {

    return (
        <div className="p-8 rounded-lg shadow-lg flex flex-col items-center text-center hover:-translate-y-2 transition">
            <div className="text-blue text-base rounded-2xl mb-6 bg-blue/10 p-4">{ICONS[icon] || ''}</div>

            <strong className="block mb-4 text-gray text-xl leading-7 font-semibold">{title}</strong>

            <p className="leading-6.5">{copy}</p>
        </div>
    );
}