import React, {useState, useEffect} from 'react'
import axiosInstance from '../axios'
import { useParams } from 'react-router-dom'

function Single() {
    const { slug } = useParams();
    const [ data, setData ] = useState({ blog : []})

    useEffect(() =>{
        axiosInstance.get(slug).then((res) => {
            setData({ blog: res.data});
            console.log(res.data);
        })
    },[setData])
  return (
    <div className="container-fluid">
    <div className='row'>
              <h3>{data.blog.title}</h3>
              <p>{data.blog.excerpt}</p>
              <p>{data.blog.content}</p>
              <small>{data.blog.published}</small>
            </div>
     </div>
  )
}

export default Single