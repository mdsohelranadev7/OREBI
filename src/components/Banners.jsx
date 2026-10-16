import { Link } from 'react-router-dom'
import srcimg from '../assets/banner.png'

const Banners = () => {
    return (
       <Link to={"/shop"}> <img src={srcimg} alt='imgalt' /></Link>
    )
}

export default Banners