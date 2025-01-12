import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
const data = useLoaderData()
    // const [data,setData]=useState([])
// useEffect(()=>{
//     fetch('https://api.github.com/users/hafiz-hammad')
//     .then(responce => responce.json()).then(data =>{
//         console.log(data)
//         setData(data)
//     })
// },[])

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl '>
        Github Followers : {data?.followers}
      <img src={data?.avatar_url} alt='Git pic' width={300} />
    </div>
  )
}

export default Github

export const githubInfoUser= async()=>{
    const responce = await fetch('https://api.github.com/users/hafiz-hammad')
    // console.log(responce.json(),"chejnjd")
    return responce.json()

}