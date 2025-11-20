import Header from '@/components/Header'
import Introduction from '@/components/Introduction'
import Timeline from '@/components/Timeline'
import WhereToFindMe from '@/components/WhereToFindMe'
import AboutMe from '@/components/AboutMe'
import Picture from '@/components/Picture'
import Squares from '@/components/Squares'
import Quote from '@/components/Quote'
import GetInTouch from '@/components/GetInTouch'

export default function Home() {
  const navItems = [
    { label: 'About Me', id: 'about-me' },
    { label: 'Career', id: 'career' },
    { label: 'Where to find me', id: 'where-to-find-me' },
    { label: 'Get in touch', id: 'get-in-touch' },
  ]

  return (
    <Squares
      speed={0.3}
      squareSize={40}
      direction="diagonal"
      borderColor="#271e37"
      hoverFillColor="#222222"
      className="w-full"
    >
      <div className="w-full flex flex-col items-center pt-8 pb-12 px-16 gap-24">
        <div className="flex flex-col w-full gap-10 sticky top-0 z-50">
          <Header items={navItems} />
        </div>
        <div className="flex flex-col justify-center items-center w-full -mt-8">
          <Picture />
          <Introduction />
        </div>
        <section id="about-me" className="scroll-mt-32">
          <AboutMe />
        </section>
        <section id="career" className="scroll-mt-32">
          <Timeline />
        </section>
        <section id="where-to-find-me" className="scroll-mt-32 w-full">
          <WhereToFindMe />
        </section>
        <section id="get-in-touch" className="scroll-mt-32 w-full">
          <GetInTouch />
        </section>
        <Quote />
      </div>
    </Squares>
  )
}
