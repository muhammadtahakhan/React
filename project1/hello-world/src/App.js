import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import './App.css';

class App extends Component {
   constructor(){
     super();
     this.state = 
     {projects :  []
   }
  }

  getTodos(){

  }

  componentWillMount(){
    this.getProjects();
   this.getTodos();
  }

getProjects(){
  this.setState({
     projects: [
       {
         id:uuid.v4(),
         title:'business website',
         category:'web design'
       },
        {
          id:uuid.v4(),
         title:'social app',
         category:'Mobile development'
       },
        {
          id:uuid.v4(),
         title:'ecommerce shoping catr',
         category:'web development'
       }
     ]
   });
}

  componenDidMount(){
   
   this.getTodos();
  }

  handleAddProject(project){
    console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
     this.setState({projects:projects});

  }

  render() {
    return (
      <div className="App">
      <AddProject addProject={this.handleAddProject.bind(this)} />
       <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
      </div>
    );
  }
}



export default App;
