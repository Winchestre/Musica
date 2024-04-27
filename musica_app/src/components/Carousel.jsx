import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react'

export default function Carousel({ newRelease }) {
    const [slide, setSlide] = useState(0)

    const PreviousSlide = () => {
       if (slide === 0) setSlide(newRelease.length - 1)
       else setSlide(slide - 1);
    }
    const NextSlide = () => {
       if (slide === newRelease.length - 1) setSlide(0)
       else setSlide(slide + 1);
    }

    return (
        <div className="px-2 overflow-hidden relative">
            <div className="grid grid-rows-5 gap-3 transition ease-in-out duration-400"
                style={{
                    transform: `translateX(-${slide * 20}%)`
                }}
            >
                {
                    newRelease.map(item => (
                        <div key={item.id} className="w-[100%]">
                            <img
                               src={`http://127.0.0.1:5000${item.image_url}`}
                               width="150px"
                               height="150px"
                               alt={item.name}
                           />
                           <div className="mt-2">
                               <p className="text-xs text-neutral-500">{item.description}</p>
                               <h5 className="text-sm">{item.name}</h5>
                           </div>
                        </div>
                    ))
                }
            </div>
            <div className="absolute w-full h-full top-0 flex justify-between items-center text-white px-4">
                <button onClick={PreviousSlide}><FaArrowLeft /></button>
                <button onClick={NextSlide}><FaArrowRight /></button>
            </div>
        </div>
    )
}
