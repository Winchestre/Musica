import like from '../../assets/Stroke-1.png'
import { Link } from 'react-router-dom'

export default function AlbumsList({ item }) {
    return (
               <Link to={`https://musica-wmgz.onrender.com/api/albums/${item.id}`} className="w-full">
                   <div className="md:flex gap-3">
                       <img src={`http://127.0.0.1:5000${item.image_url}`} className="w-[90px] h-[90px] md:w-[60px] md:h-[60px]" alt="" />
                        <div className="mt-3 md:mt-0">
                            <h2 className="text-base text-gray-100 font-semibold">{item.album_name}</h2>
                            <h4 className="text-xs text-gray-500">{item.artist}</h4>
                            <h3 className="text-sm">{item.number_of_songs} tracks</h3>
                        </div>
                   </div>
                   {/*<img src={like} alt="like" className="border border-yellow-100 rounded-full p-2"/>*/}
               </Link>
    )
}