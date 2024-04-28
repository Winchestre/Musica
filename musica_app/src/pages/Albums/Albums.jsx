import { useState, useEffect } from 'react'
import AlbumsList from '../../components/Albums/AlbumsList'

export default function Albums({ title }) {
    const [album,setAlbum] = useState([])

    useEffect(() => {
         const fetchAlbums = async() => {
              try {
                 const response = await fetch('/api/albums')
                 const data = await response.json()
                 setAlbum(data)
             } catch (error) {
                 console.error('Failed to load resource', error)
             }
         }
        fetchAlbums()
    }, [])
    return (
        <main>
            <h1 className="text-lg font-semibold">{title}</h1>
            <ul className="grid grid-flow-col auto-cols-[81%] overflow-scroll overflow-x-contain md:overflow-hidden md:overflow-x-none md:flex md:flex-col gap-3 mt-2">
                 {
                    album.map(item => (
                        <li key={item.id} className="bg-[--clr--darkalt--bg] p-3 rounded-2xl ">
                            <AlbumsList item={item} />
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}