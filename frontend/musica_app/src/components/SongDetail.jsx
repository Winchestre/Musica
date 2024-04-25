import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function SongDetail(){
    const [album, setAlbum] = useState([])
    const [song, setSong] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchSongs = async () => {
            const response = await fetch(`http://127.0.0.1:5000/albums/${id}`)
            const data = await response.json()
            setSong(data.songs.map(item => item))
            console.log(data.songs.map(item => item))
        }
        fetchSongs()
    }, [])

    return (
        <main className="mt-8">
            <ul className="flex flex-col gap-3">
                {song.map(item => (
                    <li key={item.index} className="bg-[--clr--btndark] rounded-[20px] px-2 py-3 flex items-center gap-8">
                        <img src={`http://127.0.0.1:5000${item.image_url}`} alt="image" width="60px" height="60px" />
                        <div className="">
                            <h2 className="text-base text-neutral-400">{item.title}</h2>
                            <h3 className="text-sm text-neutral-200">{item.description}</h3>
                        </div>

                    </li>
                ))}
            </ul>
        </main>
    )
}

//export const SongDetailLoader = async ({ params }) => {
    //const { id } = params
   // const response = await fetch(`http://127.0.0.1:5000/albums/${id}`)
     //return response.json()
//}