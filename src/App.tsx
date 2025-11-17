import DarkVeil from '@/components/DarkVeil'
import './App.css'
import Header from '@/components/Header'
import ProfileCard from '@/components/ProfileCard'
import Introduction from '@/components/Introduction'
import Timeline from '@/components/Timeline'

function App() {
  return (
    <div className="flex h-screen w-screen flex-col relative">
      <DarkVeil speed={1.5} />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center px-20 py-16 gap-24">
        <Header
          items={['Skills', 'Career', 'Projects', 'Talk with me']}
          onPress={() => {}}
        />
        <div className="flex flex-row justify-center gap-16 items-center w-full">
          <ProfileCard />
          <Introduction />
        </div>
        <Timeline />
      </div>
    </div>
  )
}

export default App
