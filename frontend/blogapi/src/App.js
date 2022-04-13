import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Post from './components/Post'
import { useEffect, useState } from 'react';
import axios from 'axios'

const url = 'http://127.0.0.1:8000/api/'
function App() {
  const [blogs,setBlogs] = useState([])
  const [isLoading,setisLoading] = useState(true)

  useEffect(() =>{
    const fetchData = async()=>{
      const result = await axios(url)
      setBlogs(result.data)
      console.log(result.data);
      setisLoading(false)
    }
    fetchData()
  },[])

  if(isLoading){
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <div className="App">
      <Header />
      <Post blogs={blogs}/>
      <Footer />
    </div>
  );
}

export default App;
