import { useParams, useLoaderData } from 'react-router-dom'
//import SongDetail from '../components/SongDetail'

export default function AlbumDetail() {
    const {id} = useParams()
    const item = useLoaderData()

    return (
        <>
           <h1>{item}</h1>
        </>
        /*<main className="bg-cover bg-center h-screen w-full" style={{
            backgroundImag: `url('http://127.0.0.1:5000${item.image_url}')`,
            }}>
            <div className="flex gap-6 w-2/3 items-center">
                <img src={`http://127.0.0.1:5000${item.image_url}`} width="350px" height="350px" alt="song_image" />
                <div className="pt-20">
                    <h1 className="text-3xl font-semibold">{item.title}</h1>
                    <p className="text-sm text-neutral-400 pt-2">{item.description}</p>
                    <div className="flex gap-3 items-center pt-2">
                        <h2 className="text-base text-neutral-200">artist</h2>
                        <h3 className="text-xs text-neutral-500">duration</h3>
                    </div>
                     <div className="mt-4 flex gap-3">
                        <button className="px-6 py-1 rounded-full bg-[--clr--btndark] hover:bg-yellow-300 hover:text-black">Play all</button>
                        <button className="px-6 py-1 rounded-full bg-[--clr--btndark] hover:bg-yellow-300 hover:text-black">Add to Collection</button>
                    </div>
                </div>
            </div>
        </main>*/
    )
}

export const AlbumDetailLoader = async ({ params }) => {
    const { id } = params
    const response = await fetch(`http://127.0.0.1:5000/albums/${id}`)
     return response.json()
}