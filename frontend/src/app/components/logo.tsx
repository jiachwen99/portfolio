import Link from "next/link";
import { ReactElement } from "react";
import {motion} from 'framer-motion';

const MotionLink = motion(Link);

export default function Logo(): ReactElement {

    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink href="/"
            className='w-16 h-16 bg-black text-white flex items-center justify-center
            rounded-full text-2xl font-bold
            '
            whileHover={{
                backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
                transition: {duration:1, repeat: Infinity}
            }}
            >JC</MotionLink>
        </div>
    );
}