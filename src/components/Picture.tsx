import notionFacePng from '@/assets/notion-face.png'

export default function Picture() {
  return (
    <div className="flex rounded-full bg-white p-2 items-center justify-center shadow-md">
      <img src={notionFacePng} alt="Notion Face" width={200} />
    </div>
  )
}
