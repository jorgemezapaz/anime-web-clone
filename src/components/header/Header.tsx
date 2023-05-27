import { Link } from "react-router-dom"
import fotoEizer from "../../assets/Eizer.png"

const Header = () => {
  return (
    <Link to="/anime-web-clone/">
      <div className="text-7xl p-3 flex gap-2 items-center">
        <img src={fotoEizer} width={120} />
        <span>Eizer Anime</span>
      </div>
    </Link>
  )
}

export default Header
