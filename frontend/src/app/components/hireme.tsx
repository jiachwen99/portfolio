import { ReactElement } from "react";
import { Layout } from "./layout";
import Link from "next/link";
import { CircularText } from "./icons";

export default function HireMe(): ReactElement {

    return (
        <div className="fixed left-4 bottom-4
        flex items-center justify-center overflow-hidden
        ">
            <div className="w-60 h-auto flex items-center justify-center relative">
                <CircularText className={"fill-black animate-spin-slow"} />
                <Link href="mailto:jiachwen99@gmail.com" className='flex items-center justify-center
                absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black
                text-white shadow-md border border-solid border-black w-20 h-20 rounded-full
                font-semibold hover:bg-white hover:text-black
                '>
                    Hire Me
                </Link>
            </div>
        </div>
    );
}