import React,{useEffect,useState} from 'react'
import axiosInstance from '../axios';

function Search() {
    const search = 'search';
    const [appState,setAppState] = useState({
        search : '',
        posts: [],
    })

    useEffect(() => {
        axiosInstance.get(search + '/' + window.location.search).then((res) =>{
            const allPosts = res.data;
            setAppState({ posts: allPosts})
            console.log(res.data);
        })
    },[setAppState])

  return (
    <>
      <h2>Welcome to your search results</h2>
      {appState.posts.map((post) => (
          <div key={post.id} className="col-md-4">
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <p>{post.content.substr(0,70)}...</p>
          <small>{post.published}</small>
        </div>
      ))}
    </>
  )
}

export default Search