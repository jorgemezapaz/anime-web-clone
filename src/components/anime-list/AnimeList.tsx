import { data } from '../../data/data'
import AnimeCard from '../anime-card/AnimeCard'

const AnimeList = () => {
  return (
    <div className="grid grid-cols-4 gap-2 place-items-center">
        {data.map((item, i)=>{
            return (
               <AnimeCard key={i} id={item.id} name={item.name} cover={item.cover} />
            )
        })}
    </div>
  )
}

export default AnimeList
