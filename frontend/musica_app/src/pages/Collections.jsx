import { useState, useEffect } from 'react'

export default function Collections() {
    const [collection, setCollection] = useState([])

    useEffect(() => {
        const fetchCollections = async () => {
            try{
                const response = await fetch('http://127.0.0.1:5000/collections');
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
            <h1>My collections</h1>
            {
                collection.map(item => (
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <img src={`http://127.0.0.1:5000${item.image_url}`} width="50px" height="50px" />
                    </div>

                ))
            }
        </main>
        )
    }