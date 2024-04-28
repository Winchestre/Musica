import { useState, useEffect } from 'react'
import image from '../assets/Rectangle 29.png'

export default function Collections() {
    const [collection, setCollection] = useState([])

    useEffect(() => {
        const fetchCollections = async () => {
            try{
                const response = await fetch('/api/collections');
                    const data = await response.json();
                    setCollection(data.collections);
                    console.log(data.collections)
            } catch (error){
                console.error('Error fetching requested data', error)
            }
        }
        fetchCollections();
    }, [])
    return (
        <main>
            <div className="flex gap-3 justify-around md:justify-start">
                <button className="py-1 px-8 md:px-6 md:py-2 bg-[--clr--secondary--bg] text-black hover:bg-transparent hover:text-neutral-600 hover:border hover:border-neutral-600 transition ease-in-out rounded-full">My collection</button>
                <button className="py-1 px-8 md:px-6 md:py-2 bg-transparent border border-neutral-600 text-neutral-600 hover:bg-[--clr--secondary--bg] transition ease-in-out rounded-full">Likes</button>
            </div>
            <ul className=" md:grid grid-cols-4 gap-4 mt-6">
                {
                    collection.map(item => (
                        <li key={item.id} className="rounded-[20px] p-3 relative">
                            <img src={`http://127.0.0.1:5000${item.image_url}`} alt="" width="100%" height="280px" className="rounded-[27px]" />
                            <div className="absolute top-[60%] px-3">
                                <h1 className="text-lg font-semibold">{item.description}</h1>
                                <h2 className="text-sm font-light">{item.name}</h2>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </main>
        )
    }