import DarkVeil from '@/components/DarkVeil'
import './App.css'
import Header from '@/components/Header'
import ProfileCard from '@/components/ProfileCard'
import profilePicture from '@/assets/profile.png'

function App() {
  return (
    <div className="flex h-screen w-screen flex-col relative">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center py-16 px-20 gap-24">
        <Header items={['Home', 'About', 'Contact']} onPress={() => {}} />
        <div className="flex flex-row justify-center gap-16 items-center w-full">
          <ProfileCard
            name="lucaskraus"
            title="Software Engineer"
            handle="javicodes"
            status="Online"
            contactText="Contact Me"
            avatarUrl={profilePicture}
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log('Contact clicked')}
            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            behindGlowColor="rgba(125, 190, 255, 0.67)"
            behindGlowSize="50%"
            miniAvatarUrl="/path/to/mini-avatar.jpg"
          />
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl">
              My name is{' '}
              <span className="font-bold text-blue-500">Lucas Kraus</span> and I
              am a
            </h2>
            <h1 className="text-4xl font-bold">Software Engineer</h1>
            <img src="https://skillicons.dev/icons?i=html,css,js,ts,react,nextjs,vue,nuxtjs,tailwind,nodejs,$theme=dark" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
