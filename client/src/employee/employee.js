import React, { Component } from "react";
import axios from "axios";

class Employee extends Component {
    constructor() {
        super();
        this.state = {
            employees: []
        }
    }

    async componentDidMount() {
        try {
            const res = await axios.get("/employees");
            console.log(res.data)
            this.setState({
                employees: res.data
            })
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = (event) =>{
        
    }

    deleteEmployee = async (id) => {
        try{
            await axios.delete(`/employees/${id}`);
            console.log(`Id: ${id} was deleted`);
           this.refresh();
        }catch(error){
            console.log(error)
        }
    }

    refresh = async () =>{
        try{
            const res = await axios.get("/employees")
            this.setState({
                employees: res.data
            })
        } catch (error){

        }
    }

    render() {
        if (this.state.employees.length) {
            return (
                <div>
                    <ul>
                        {this.state.employees.map(el => {
                            return <li key={el.EmpID}>Name:{el.Name}EmpCode:{el.EmpCode} Salary: {el.Salary}</li>
                        })}
                    </ul>
                    <form>
                        <input name="Name" placeholder="Please Enter Employee Name Here!" onChange ={this.handleChange}/>
                        <input name="EmpCode" placeholder="Place the Employee Code here It's a number" onChange ={this.handleChange}/>
                        <input name ="Salary" placeholder="Please enter the Employees Salary - It's a number as well" onChange ={this.handleChange}/>
                    </form>
                </div>
            )
        } else {
            return (
                <div>There isn't any employees to list :( </div>
            )
        }
    }
}

export default Employee