import Header from '@/components/Header'
import Introduction from '@/components/Introduction'
import Timeline from '@/components/Timeline'
import Repositories from '@/components/Repositories'
import AboutMe from '@/components/AboutMe'
import Picture from '@/components/Picture'
import Squares from '@/components/Squares'
import Quote from '@/components/Quote'
import './App.css'

function App() {
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
        <div className="flex flex-col w-full gap-10">
          <Header
            items={['About Me', 'Career', 'Where to find me', 'Get in touch']}
            onPress={() => {}}
          />
        </div>
        <div className="flex flex-row justify-center gap-24 items-center w-full">
          <Picture />
          <Introduction />
        </div>
        <AboutMe />
        <Timeline />
        <Repositories />
        <Quote />
      </div>
    </Squares>
  )
}

export default App
