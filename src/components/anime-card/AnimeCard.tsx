import { Link } from "react-router-dom"

export type Props = {
    id: number,
    name: string,
    cover: string
}
const AnimeCard: React.FC<Props> = ({id, name, cover}) => {
  return (
    <Link to={`/ver/${id}`}>
      <div className="p-3 text-center cursor-pointer hover:bg-[#bc1eac] rounded-lg ">
          <img src={cover} alt="" className="rounded-md"/>
          <div>{name}</div>
      </div>
    </Link>
  )
}

export default AnimeCard
