import { ReactElement } from "react";

type props = {
    children: ReactElement|string;
}

export const Subtitle = ({children}: props) => {
    return (
        <span className="text-center py-0.5 px-2.5 bg-blue-light/10 text-blue-light text-xs font-semibold border border-blue-light/20 rounded-full">{children}</span>
    );
}