'use client';
import Link from "next/link";
import { ReactElement } from "react";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import { GithubIcon, GmailIcon, LinkedInIcon, TwitterIcon } from "./icons";
import { motion } from "framer-motion"; 

interface CustomLinkProps {
  href: string,
  title: string,
  className?: string
}

const CustomLink = ({href, title, className} : CustomLinkProps) : ReactElement => {
  const currentPath = usePathname();
  
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`
      h-[1px] inline-block w-0 bg-black
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${currentPath === href ? 'w-full' : 'w-0'}
      `}>
        &nbsp;
      </span>
    </Link>
  )
}

export default function Header(): ReactElement {

    return (
        <>
          <header 
          className="w-full px-32 py-8 font-medium flex items-center justify-between bg-main"
          >
            <nav>
              <CustomLink href="/" title="Home" className="mr-4" />
              <CustomLink href="/about" title="About" className="mx-4" />
              <CustomLink href="/portfolio" title="Portfolio" className="mx-4" />
            </nav>
            <nav className="flex items-center justify-center flex-wrap">
              <motion.a href="https://github.com/jiachwen99" target={"_blank"}
              whileHover={{y:-3}}
              whileTap={{scale:0.9}}
              className="w-6 mx-3"
              >
                <GithubIcon className="" /> 
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/jc-t-3476971a8/" target={"_blank"}
              whileHover={{y:-3}}
              whileTap={{scale:0.9}}
              className="w-6 mx-3"
              >
                <LinkedInIcon className="" /> 
              </motion.a>
              <motion.a href="mailto:jiachwen99@gmail.com" target={"_blank"}
              whileHover={{y:-3}}
              whileTap={{scale:0.9}}
              className="w-7 ml-3"
              >
                <GmailIcon className="" /> 
              </motion.a>
            </nav>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
              <Logo />
            </div>
          </header>
        </>
    );
}