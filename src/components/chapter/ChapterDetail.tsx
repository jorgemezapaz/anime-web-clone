import { data } from '../../data/data'
import listIcon from '../../assets/icons/list-2-16.png'
import { Link, useParams } from "react-router-dom"

const ChapterDetail = () => {
  const { animeId, chapterId } = useParams()
  const anime = data.find(item => item.id === Number(animeId))
  const chapter = anime?.chapters.find(item => item.id === Number(chapterId))
  const isNextChapter = Number(chapterId) < anime?.chapters.length
  const isPrevChapter = Number(chapterId)-1 > 0
  return (
    <div className="bg-[#110e22] p-10 rounded-lg">
        <div className="text-center">
          <div className="text-lg">{anime.name}</div>
          <div className="text-sm">{chapter?.name}</div>
          <div className="flex items-center justify-center mt-5">
            <iframe src={chapter?.link} height="360" width="640" allowFullScreen ></iframe>
          </div>
          <div className="flex items-center justify-center py-3">
            <div className="grid grid-cols-3 gap-3">
              {isPrevChapter && 
                <Link to={`/ver/${anime.id}/chapter/${chapter?.id}`} className='bg-[#0084cc] py-1 px-3 rounded-lg'>
                  <button>ANTERIOR</button>
                </Link>
              }
              <Link to={`/ver/${anime.id}`} className=' bg-[#0084cc] py-1 px-3 rounded-lg'>
                <button className='flex items-center justify-center gap-2'>
                  <img src={listIcon}/>
                  LISTA
                </button>
              </Link>
              { isNextChapter && 
                <Link to={`/ver/${anime.id}/chapter/${chapter?.id}`} className='bg-[#0084cc] py-1 px-3 rounded-lg'>
                  <button>SIGUIENTE</button>
                </Link>
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default ChapterDetail
