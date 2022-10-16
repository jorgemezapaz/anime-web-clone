import { Link, useParams } from 'react-router-dom'
import playIcon from '../../assets/icons/play-7-16.png'
import { data as dataList } from '../../data/data'

const ChaptersList = () => {
  const { id } = useParams()
  const anime = dataList[Number(id)-1]
  return (
    <div>
        <div className="bg-[#110e22] p-3 rounded-lg">
        <div className="flex gap-2">
            <img src={anime.cover} alt="" className="rounded-md"/>
            <div className="px-2">
                <div className="text-4xl pb-2 text-[#076098]">{anime.name}</div>
                <div className="flex gap-2">
                    <div className="flex items-center justify-center">
                        <span className="rounded-xl bg-[#0084cc] text-white px-2 text-sm font-bold">{anime.status}</span>
                    </div>
                    <div className="text-sm ">{anime.season} - {anime.chapters.length} Episodios</div>
                </div>
                <div className="overflow-y-auto h-48 pt-2 text-sm">{anime.description}</div>
            </div>
        </div>
        </div>
        <div className="p-3 mt-3 bg-[#28153b] rounded-lg">
            <div className='border-b-2 border-[#831a81] py-2'>{anime.season}</div>
            <div className="mt-5 ">
                {anime.chapters.map((chapter, i) => {
                    return (
                    <Link to={`/anime-web-clone/ver/${anime.id}/chapter/${chapter.id}`}>
                        <div className="text-lg flex gap-2 hover:bg-[#bc1eac] cursor-pointer rounded-2xl p-3 px-10" key={chapter.id}>
                            <div className="text-[#831a81] w-8">{i+1}</div>
                            <div className="w-full">{chapter.name}</div>
                            <div className="flex w-6 items-center justify-center"><img src={playIcon} /></div>
                        </div>
                    </Link>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default ChaptersList
