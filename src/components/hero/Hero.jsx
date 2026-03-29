import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='my-5'>
        <ul className='grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4 sm:gap-4'>
            <li className='bg-stone-200 px-4 py-3 rounded-xl'><Link className='flex items-center justify-center gap-3 text-center text-sm sm:text-base' to="/global"> <img width={40} height={40} src="	https://static.uzum.uz/static/promo_images/756b6f56-9d2d-414c-a9d3-37d40d1c808b" alt="" /> Onalar va bolalar uchun</Link></li>
            <li className='bg-stone-200 px-4 py-3 rounded-xl'><Link className='flex items-center justify-center gap-3 text-center text-sm sm:text-base' to="/ArzonNarx"> <img width={40} height={40} src="https://static.uzum.uz/static/promo_images/a266cae1-db3a-4b40-a984-cf9220d9b2e8" alt="" /> Arzon narxlar kafolati</Link></li>
            <li className='bg-stone-200 px-4 py-3 rounded-xl'><Link className='flex items-center justify-center gap-3 text-center text-sm sm:text-base' to="/globaltwo"> <img width={40} height={40} src="	https://static.uzum.uz/static/promo_images/c1ade4dd-8de3-475e-9632-7ab0586ddcd9" alt="" /> Zamonaiv bozor</Link></li>
            <li className='bg-stone-200 px-4 py-3 rounded-xl'><Link className='flex items-center justify-center gap-3 text-center text-sm sm:text-base' to="/globalcenter"> <img width={40} height={40} src="https://static.uzum.uz/static/promo_images/14d81cd8-d743-4db1-9355-52c34882e3ad" alt="" /> Qishki <br/> chegirma</Link></li>
        </ul>
    </div>
  )
}

export default Hero
