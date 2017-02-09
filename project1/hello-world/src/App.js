import React, { Component } from 'react';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
   constructor(){
     super();
     this.state = 
     {projects :  [
       {
         title:'business website',
         category:'web design'
       },
        {
         title:'social app',
         category:'Mobile development'
       },
        {
         title:'ecommerce shoping catr',
         category:'web development'
       }
     ]
   }
  }

  render() {
    return (
      <div className="App">
       My app
       <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
