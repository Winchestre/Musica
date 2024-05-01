import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import heart_white from '../assets/icons/Heart_white.svg'
import heart_red from '../assets/icons/Heart.svg'
import vertical from '../assets/icons/more-vertical.svg'
import play from '../assets/icons/Play.svg'
import music from '../assets/icons/music.svg'


export default function AlbumDetail() {
    const [items, setItems] = useState([])
    const [song, setSongs] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const fetchItems = async(id) => {
          try {
              const response = await fetch(`https://musica-wmgz.onrender.com/api/albums/${id}`)
              if (!response.ok) {
                  throw new Error('Failed to fetch data')
              }
              const data = await response.json()
              setItems(data)
              setSongs(data.songs)
          } catch (error) {
              console.error('Error fetching data:', error)
          }
        }
        fetchItems(id)
     }, [id])
    //const items = useLoaderData()

    return (
        <>
            <main className="md:flex gap-4" >
                <img src={`https://musica-wmgz.onrender.com${items.image_url}`} className="w-[100%] md:w-[300px]" height="300px" alt="image" />
                <div className="mt-6 md:mt-[120px]">
                    <h1 className="text-2xl md:text-3xl text-[--clr--primary--bg] font-semibold">{items.album_name}</h1>
                    <p className="text-[14px] mt-2 md:w-[75%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                    <div className="flex gap-1 items-center text-neutral-400 text-sm mt-2 mb-6">
                        <h3>{items.number_of_songs} songs</h3>
                        <span>-</span>
                        <h3>{items.duration}</h3>
                    </div>
                    <div className="flex gap-2 justify-between sm:justify-start md:gap-3 mt-10">
                        <button className="px-3 py-1 md:px-6 md:py-2 bg-[--clr--btndark] hover:bg-transparent hover:text-white hover:border rounded-full text-xs md:text-sm font-light transition ease-in-out"><img src={play} alt="icon" width="18px" height="18px" className="inline-block mr-2" />Play all</button>
                        <button className="px-3 py-1 md:px-6 md:py-2 bg-[--clr--btndark] hover:bg-transparent hover:text-white hover:border rounded-full text-xs md:text-sm font-light transition ease-in-out"><img src={music} alt="icon" width="18px" height="18px" className="inline-block mr-2" />Add to collection</button>
                        <div className="p-2 bg-[--clr--btndark] hover:bg-transparent hover:border rounded-full transition ease-in-out">
                            <img src={heart_red} alt="like" width="22px" height="22px" />
                        </div>
                    </div>
                </div>
            </main>
            <section className="mt-12">
                <ul className="flex flex-col gap-2 pb-4">
                    {
                        song.map(item => (
                            <li key={item.id} className="bg-[--clr--darkalt--bg] p-2 rounded-2xl grid grid-cols-4 items-center">
                                <div className="md:flex gap-6">
                                    <img src={`https://musica-wmgz.onrender.com${item.image_url}`} width="50px" height="40px" className="rounded-md" alt="song_image" />
                                    <img src={heart_white} alt="like" className="hidden md:block" width="22px" height="22px" />
                                </div>
                                <h1 className=" text-sm md:text-base font-semibold text-neutral-400">{item.title}</h1>
                                <h2 className="text-sm text-center">4:12</h2>
                                <img src={vertical} alt="icon" className="ml-auto" role="button" />
                            </li>
                        ))
                    }
                </ul>
            </section>
        </>
    )
}
