import Header from '@/components/Header'
import ProfileCard from '@/components/ProfileCard'
import Introduction from '@/components/Introduction'
import Timeline from '@/components/Timeline'
import Repositories from '@/components/Repositories'
import AboutMe from '@/components/AboutMe'
import './App.css'

function App() {
  return (
    <div className="flex h-screen w-screen flex-col relative overflow-x-hidden overflow-y-auto">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center p-16 gap-24">
        <Header
          items={['About Me', 'Career', 'Repositories', 'Talk with me']}
          onPress={() => {}}
        />
        <div className="flex flex-row justify-center gap-32 items-center w-full">
          <ProfileCard />
          <Introduction />
        </div>
        <AboutMe />
        <Timeline />
        <Repositories />
      </div>
    </div>
  )
}

export default App
