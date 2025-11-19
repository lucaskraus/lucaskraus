/* eslint-disable @next/next/no-img-element */
export default function Introduction() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl">
        My name is <span className="font-bold text-blue-500">Lucas Kraus</span>{' '}
        and I am a
      </h2>
      <h1 className="text-4xl font-medium">Mobile & Front-End Engineer</h1>
      <img
        src="https://skillicons.dev/icons?i=html,css,js,ts,react,nextjs,vue,nuxtjs,tailwind,nodejs&theme=dark"
        loading="eager"
        alt="Skill Icons"
      />
    </div>
  )
}
