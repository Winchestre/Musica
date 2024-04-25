import { useParams, useLoaderData } from 'react-router-dom'
import heart_white from '../assets/icons/Heart_white.svg'
import heart_red from '../assets/icons/Heart.svg'
import vertical from '../assets/icons/more-vertical.svg'
import play from '../assets/icons/Play.svg'
import music from '../assets/icons/music.svg'


export default function AlbumDetail() {
    const {id} = useParams()
    const items = useLoaderData()

    return (
        <>
            <main className="md:flex gap-4" style={{
                        backgroundImage: `url(http://127.0.0.1:5000${items.image_url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                }}>
                <img src={`http://127.0.0.1:5000${items.image_url}`} className="w-[100%] md:w-[300px]" height="300px" alt="image" />
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
                        items.songs.map(item => (
                            <li key={item.id} className="bg-[--clr--darkalt--bg] p-2 rounded-2xl grid grid-cols-4 items-center">
                                <div className="md:flex gap-6">
                                    <img src={`http://127.0.0.1:5000${item.image_url}`} width="50px" height="40px" className="rounded-md" alt="song_image" />
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

export const AlbumDetailLoader = async ({ params }) => {
    const { id } = params
    const response = await fetch(`http://127.0.0.1:5000/albums/${id}`)
     return response.json()
}