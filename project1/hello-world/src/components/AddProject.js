import React, { Component } from 'react';


class AddProject extends Component {
    static defaultProps = {
        categories:['Web Design', 'web Development', 'Mobile Development']
    }
   render() {
        let categoryoptions;
        if(this.props.categories){
      categoryoptions = this.props.categories.map(category => {
         return (<option key={category}>{category}</option>);
     });
        }
  // console.log(this.props.projects);
    return (
      <div  >
    <h3>Add Project</h3>
    <form>
    <div>
    <label>Title</label><br />
    <input type="text" ref="title" />
    </div>
     <div>
    <label>Category</label><br />
    <select ref="category" >
     {categoryoptions}
    </select>
    </div>
    </form>
      </div>
    );
  }
}

export default AddProject;
