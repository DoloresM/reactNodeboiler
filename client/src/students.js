import React, {Component} from "react";

class Students extends Component{
  constructor(){
    super();
    this.state = {
      students: []
    }
  }

  async comoponentDidMount(){
    const res = await fetch("/api/student");
    const data = await res.join();
    console.log("hello",data);
    this.setState({
      students:data
    })
  }

  render(){
    return(
      <div>{this.state.student}</div>
    )
  }
}

export default Students;
