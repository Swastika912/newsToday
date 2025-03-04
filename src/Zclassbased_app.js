import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  //  c = "John";  dont use const inside a class
   pageSize = 5;
   apiKey= process.env.REACT_APP_NEWS_API              // search environment variable react app

   state={                         // We have to do this becoz we are using a class based component, func based would have been easier.
    progress: 0,
   }

   setProgress = (progress)=> {
    this.setState({progress: progress})
   }



  render() {
  
  
    return (
      <Router>
        {/* This is a class based component, {this.c} .*/}
        <NavBar/>

        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress } 
      
      />

        <Routes>
          <Route exact path='/' element= {<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/>}></Route>
          <Route exact path='/business' element= {<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business"/>}></Route>
          <Route exact path='/entertainment' element= {<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}></Route>
          <Route exact path='/health' element= {<News setProgress={this.setProgress} apiKey={this.apiKey} key="health"  pageSize={this.pageSize} country="in" category="health"/>}></Route>
          <Route exact path='/science' element= {<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science"/>}></Route>
          <Route exact path='/sports' element= {<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}></Route>
          <Route exact path='/technology' element= {<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}></Route>


        </Routes>
       
      </Router>
    )
  }
}

// fc62cc319b144217a17767920b107797      new api key

