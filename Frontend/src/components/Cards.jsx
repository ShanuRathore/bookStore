import React from 'react'

function Cards({item}) {
    // console.log(item);
    return (
        <>
            <div className='my-4 p-3 '>
                <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200  dark:bg-slate-800 dark:text-white dark:border">
                    <figure className='h-80'><img className='mh-32 w-full ' src={item.image} alt={item.category} /></figure>
                    <div className="card-body h-60">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className="cursor-pointer py-4 px-3 badge badge-outline  hover:bg-pink-500 hover:text-white duration-200 ">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
