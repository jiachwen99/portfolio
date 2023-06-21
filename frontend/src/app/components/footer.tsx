import { ReactElement } from "react";
import { Layout } from "./layout";
import Link from "next/link";

export default function Footer(): ReactElement {

    return (
        <footer className='w-full border-t-2 border-solid border-black
        font-medium text-lg 
        '>
            <Layout className="py-8 flex items-center justify-between">
                <>
                    <span>2023 &copy; All Rights Reserved</span>
                    <div className="flex items-center">
                        Build With <span className='text-2xl px-1 text-red-600'>&#9825;</span>
                        by&nbsp;<Link href="/" className="underline
                        underline-offset-2
                        ">JC Tan</Link>
                    </div>
                    <Link href="https://devdreaming.com" target={"_blank"}>Say Hello</Link>
                </>
            </Layout>
        </footer>
    );
}