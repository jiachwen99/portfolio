'use client';
import { ReactElement } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
    text: string,
    className: string
}

const quote = {
    initial : {
        opacity : 1
    },
    animate : {
        opacity : 1,
        transition : {
            delay : 0.5,
            staggerChildren: 0.08,
        }
    }
}

const singleWordQuote = {
    initial : {
        opacity : 0,
        y : 50,
    },
    animate : {
        opacity : 1,
        y : 0,
        transition : {
            duration : 1,

        }
    }
}

export function AnimatedText({text, className} : AnimatedTextProps): ReactElement {
    return (
        <div className='w-full mx-auto py-2 flex items-center jsutify-center text-center
        overflow-hidden
        '>
            <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
            variants={quote}
            initial="initial"
            animate="animate"
            >
                {
                    text.split(" ").map((word, index) => 
                        <motion.span key={word + '-' + index} className="inline-block"
                        variants={singleWordQuote}
                        >
                            {word}&nbsp;
                        </motion.span>
                    )
                }
            </motion.h1>
        </div>
    );
};