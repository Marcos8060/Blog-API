import React from 'react'
import './post.css'



function Post ({blogs}) {
  return (
    <>
    <div className="container-fluid">
    <div className='row'>
        {blogs.map((blog) =>(
            <div key={blog.id} className="col-md-4">
              <h3>{blog.title}</h3>
              <p>{blog.excerpt}</p>
              <p>{blog.content.substr(0,70)}...</p>
              <small>{blog.published}</small>
              <a href={'post/' + blog.slug}>view Post</a>
            </div>
        ))}
     </div>
    </div>
    </>
  )

}



export default Post 