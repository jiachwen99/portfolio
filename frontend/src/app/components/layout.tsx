import { ReactElement } from "react"

interface LayoutProps {
    children : ReactElement,
    className? : string
}

export function Layout({children, className} : LayoutProps): ReactElement {
    return (
        <div className={`w-full h-full inline-block z-0 bg-light p-32 ${className} `}>
            {children}
        </div>
    );
};
