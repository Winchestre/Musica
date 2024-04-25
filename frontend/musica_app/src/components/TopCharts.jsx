import like from '../assets/Stroke-1.png'
import { Link } from 'react-router-dom'

export default function TopCharts({ chart }) {
    return(
        <div className="w-[40%]">
            <h1 className="font-bold text-xl">Top Charts</h1>
            <ul className="flex flex-col gap-3 mt-2">
                {
                    chart.map(item => (
                        <Link key={item.id} to={`/top_charts/${item.id.toString()}`}>
                            <li className="bg-[--clr--darkalt--bg] py-2 px-3 rounded-2xl flex justify-between items-center">
                                <div className="flex gap-3">
                                    <img src={`http://127.0.0.1:5000${item.image_url}`} alt="" width="60px" height="60px"/>
                                   <div className="">
                                       <h2 className="text-base text-gray-100 font-semibold">{item.title}</h2>
                                       <h4 className="text-xs text-gray-500">{item.artist}</h4>
                                       <h3 className="text-sm">{item.duration}</h3>
                                   </div>
                                </div>
                                    <img src={like} alt="like" className="border border-yellow-100 rounded-full p-2"/>
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
)}