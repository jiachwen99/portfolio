import Link from "next/link";
import Image from 'next/image';
import { Layout } from "./components/layout";
import { AnimatedText } from "./components/animatedText";
import { LinkArrow } from "./components/icons";
import homePicture from '../../public/images/homepage.png';
import lightBulb from '../../public/images/light_bulb.svg';


export default function Page() {
  return (
    <main className="flex item-center text-black bg-main w-full min-h-screen">
      <Layout className="">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image src={homePicture} alt="picJC" className="w-full h-auto" />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <div className='mb-2 w-24'>
              <Image src={lightBulb} alt="JC Tan" className='w-full h-auto' />
            </div>
            <AnimatedText text='Bringing Ideas to Life through Code and Design' className='!text-5xl !text-left text-headline'/>
            <p className="my-4 text-base font-medium text-paragraph">
            Being an experienced senior full-stack engineer, my primary focus is on transforming concepts into groundbreaking web applications. 
            Browse through my updated list of achievements that demonstrate my proficiency in executing diverse projects.
            </p>
            <div className='flex items-center self-start mt-2'>
              <Link href="/resume.pdf" target={"_blank"}
              className="flex items-center bg-button text-black p-2.5 px-6
              rounded-lg text-lg font-semibold hover:bg-button-hover hover:text-white
              border border-solid border-transparent hover:border-black
              "
              download={true}
              >Resume <LinkArrow className={"w-6 ml-1"} /></Link>
              {/* <Link href="mailto:jiachwen99@gmail.com" target={"_blank"}
              className="ml-4 text-lg font-medium capitalize text-black underline"
              >Contact</Link> */}
            </div>
          </div>
        </div>
      </Layout>

      {/* <HireMe /> */}


    </main>
  );
}
