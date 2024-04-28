import image1 from '../assets/Frame 4.png'
import image2 from '../assets/Vector.png'
import photo from '../assets/home/photo.png'
import TopCharts from '../components/TopCharts'
import NewReleases from '../components/NewReleases'
import { useEffect, useState } from 'react'

export default function Home() {
    const [newRelease, setNewRelease] = useState([])

   useEffect(() => {
        const fetchNewRelease = async () => {
            try {
                const response = await fetch('/api/new_releases')
                const data = await response.json()
                setNewRelease(data.new_releases)
            } catch (error) {
                console.error('Failed to fetch requested data', error)
            }
        }
        fetchNewRelease()
    }, [])

	return (
        <main className="" >
            <div className="hero--container md:flex gap-2">
                <div className="bg-[--clr--hero--card] rounded-[20px] md:rounded-[30px] px-6 md:px-8 md:w-[60%]"
                     style={{
                            backgroundImage: `url(${photo})`,
                            backgroundSize: "contain",
                            backgroundPosition: "right",
                            backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="pt-6 pb-6 md:pb-16">
                        <h6 className="text-xs">Curated Playlist</h6>
                        <div className="mt-20 md:my-10">
                            <h1 className="text-4xl font-semibold">R & B Hits</h1>
                            <p className="text-sm md:w-[60%] mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi neque error! Natus error amet hic fugiat!</p>
                        </div>

                        <div className="mt-10 flex justify-between items-center md:w-[35%]">
                            <img src={image1} alt="profiles" />
                            <div className="flex gap-3">
                                <span><img src={image2} alt="like" /></span>
                                <h3>33k Likes</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <TopCharts/>
            </div>
            <NewReleases newRelease={newRelease} />
        </main>
    )
}