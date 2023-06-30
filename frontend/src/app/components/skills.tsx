'use client';
import Link from "next/link";
import {ReactElement} from "react";
import {motion} from 'framer-motion';

export default function Skills(): ReactElement {

    return (
        <>
            <h2 className="font bold text-8xl mt-64 w-full text-center">Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
                p-8 shadow-dark cursor-pointer        
                '
                whileHover={{scale:1.05}}
                >
                    Web
                </motion.div>
            </div> 
        </>
    );
}