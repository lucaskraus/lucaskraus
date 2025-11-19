import notionFacePng from '@/assets/notion-face.png'

export default function Picture() {
  return (
    <div className="flex flex-col gap-2.5 items-center relative">
      <div className="flex rounded-full bg-blue-200 p-2 items-center justify-center shadow-md">
        <img src={notionFacePng} alt="Notion Face" width={200} />
      </div>
    </div>
  )
}
