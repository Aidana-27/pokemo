import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './Card'


const Hero = () => {
    const [info, setInfo] = useState([])
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then(({ data }) => setInfo(data))
    },[])
    console.log(info);
    return (
        <>
                <div className='container'>
                <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-7">
                    {info.map((el,index) => (
                        <Card el={el} index={index} />
                    ))}
                </ul>
                </div>

        </>
    )
}

export default Hero