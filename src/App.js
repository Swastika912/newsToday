
import './App.css';
import React, {  useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App = ()=>{
  //  c = "John";  dont use const inside a class
   const pageSize = 5;
   const apiKey= process.env.REACT_APP_NEWS_API              // search environment variable react app

  

  const [progress , setProgress] = useState(0)

  
  
  
    return (
      <Router>
        
        <NavBar/>

        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress } 
      
      />

        <Routes>
          <Route exact path='/' element= {<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route exact path='/business' element= {<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}></Route>
          <Route exact path='/entertainment' element= {<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route>
          <Route exact path='/health' element= {<News setProgress={setProgress} apiKey={apiKey} key="health"  pageSize={pageSize} country="in" category="health"/>}></Route>
          <Route exact path='/science' element= {<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}></Route>
          <Route exact path='/sports' element= {<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route>
          <Route exact path='/technology' element= {<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route>


        </Routes>
       
      </Router>
    )
  
}

export default App


// fc62cc319b144217a17767920b107797      new api key

