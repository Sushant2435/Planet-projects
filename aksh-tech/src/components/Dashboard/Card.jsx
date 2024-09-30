import React from 'react'
import { BsTextParagraph } from "react-icons/bs";
const cardArr = [
    {
        id: 1,
        Name: "Today's Sales",
        Price: "₹ 10,945",
        estimate: "4.63%",
        bgcolor: "bg-pink-200",
    },
    {
        id: 2,
        Name: "Today's Revenue",
        Price: "₹ 7,945",
        estimate: "1.63%",
        bgcolor: "bg-yellow-100",

    },
    {
        id: 3,
        Name: "Today's Customer",
        Price: "945",
        estimate: "6.25% ",
        bgcolor: "bg-green-100",

    },
    {
        id: 4,
        Name: "Total Store",
        Price: "20+",
        estimate: "2.63%",
        bgcolor: "bg-purple-100",

    },
]
const Card = () => {
    return (
        <div className='flex flex-wrap justify-center mt-10 gap-10'>
            {cardArr.map((item) => (
                <div key={item.id} className={`w-[520px] h-48 ${item.bgcolor} px-14 py-10 rounded-2xl flex items-center justify-between`}>
                    <div>
                        <p className='text-2xl font-semibold'>{item.Name}</p>
                        <p className='text-3xl font-semibold'>{item.Price}</p>
                        <p className='mt-2'><span className='text-red-500'>{item.estimate}</span> vs. last week</p>
                    </div>
                    <div>
                        <BsTextParagraph className='h-44 w-44 text-green-200' />
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Card
