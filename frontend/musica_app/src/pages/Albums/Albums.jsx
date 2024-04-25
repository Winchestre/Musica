import { useState, useEffect } from 'react'
import AlbumsList from '../../components/Albums/AlbumsList'

export default function Albums() {
    const [album,setAlbum] = useState([])

    useEffect(() => {
         const fetchAlbums = async() => {
              try {
                 const response = await fetch('http://127.0.0.1:5000/albums')
                 const data = await response.json()
                 setAlbum(data)
                 //console.log(data.map(item => item))
             } catch (error) {
                 console.error('Failed to load resource', error)
             }
         }
        fetchAlbums()
    }, [])
    return (
        <main>
            <h1>Albums</h1>
             {
                album.map(item => (
                    <AlbumsList item={item} key={item.id}/>
                ))
            }
        </main>
    )
}