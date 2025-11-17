import DarkVeil from '@/components/DarkVeil'
import './App.css'
import Header from '@/components/Header'
import ProfileCard from '@/components/ProfileCard'

function App() {
  return (
    <div className="flex h-screen w-screen flex-col relative">
      <DarkVeil speed={1.5} />
      <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center p-20 gap-24'>
        <Header items={['Home', 'About', 'Contact']} onPress={() => {}} />
        <div className='flex flex-row justify-center gap-24 items-center w-full'>
          <ProfileCard />
          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl'>My name is <span className='font-bold text-blue-500'>Lucas Kraus</span> and I am a</h2>
            <h1 className='text-4xl font-bold'>Software Engineer</h1>
            <img src="https://skillicons.dev/icons?i=html,css,js,ts,react,nextjs,vue,tailwind,nodejs,$theme=dark" />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default App
