'use client';
import { AnimatedText } from "../components/animatedText"
import { Layout } from "../components/layout"
import Skills from "../components/skills"
import { motion } from 'framer-motion';

export const metadata = {
    title: 'JC Tan | About Me',
    description: 'Created By JC Tan',
}

const borderVariants = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "circInOut",
      },
    },
};

export default function About() {
    return (
        <main className="flex w-full flex-col items-center justify-center bg-main">
            <Layout className="pt-16">
                <div>
                    <AnimatedText text="Passion Ignites Innovation" className="" />
                    <motion.div 
                        className="border-2 border-black rounded-lg overflow-hidden mt-5"
                        initial="initial"
                        animate="animate"
                        variants={borderVariants}
                        whileHover={{scale : 1.05}}
                        whileTap={{scale : 0.95}}
                    >
                        <div className="bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 h-full w-full p-8 shadow-lg">
                            <h2 className="text-3xl font-bold text-headline mb-4">About JC Tan</h2>
                            <p className="text-lg text-lightBlue-800">
                                A <b>3 YOE</b> Senior Software Engineer. With my experience in building robust systems and leading agile development teams, 
                                I've been able to successfully deliver projects while optimizing system architecture flows for efficient and scalable solutions. 
                                I have expertise in multiple programming languages like <b>GoLang, PHP, Python, NodeJS, ReactJS, AngularJS, NestJS, NextJS, Typescript</b> and <b>Ionic</b> which also specialize in <b>AWS</b>. 
                                I specialize in creating various systems from scratch including <b>ERP and CMS systems</b> along with seamless integrations such as <b>Stripe, EGHL and 2C2P</b>. 
                                Driven by the challenges that arise along my careers, I am constantly striving to improve and research new technologies such as AI, Web3, Blockchain!
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Layout>
            <Skills />
        </main>
    )
}
