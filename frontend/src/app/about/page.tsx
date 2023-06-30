import { AnimatedText } from "../components/animatedText"
import { Layout } from "../components/layout"
import Skills from "../components/skills"

export const metadata = {
    title: 'JC Tan | About Me',
    description: 'Created By JC Tan',
}

export default function About() {
    return (
        <main className="flex w-full flex-col items-center justify-center bg-main">
            <Layout className="pt-16">
                <AnimatedText text="Passion Ignites Innovation" className=""/>
            </Layout>
            <Skills />
        </main>
    )
}
  