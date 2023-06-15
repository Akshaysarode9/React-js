import React, { Component } from 'react'

export default class Child extends Component {
 
      constructor(){
        super();
        this.state={
            employees:[
                {
                    emp_name:"Akki Sarode",
                    emp_id:"ty1234",
                    emp_sal:"10000",
                    emp_city:"Pune",
                    emp_gender:"Male",
                    emp_marital:"Unmarried",
                    emp_phone:"7219711287",
                    emp_emailid:"akki@4500",
                    emp_dob:"22yrs",
                    emp_bloodGroup:"O+",
                    emp_Adhar:"12345678912",
                    emp_Designation:"Student",
                },
                {
                    emp_name:"Ram Sarode",
                    emp_id:"ty1234",
                    emp_sal:"14000",
                    emp_city:"Pune",
                    emp_gender:"Male",
                    emp_marital:"Unmarried",
                    emp_phone:"7219711287",
                    emp_emailid:"akki@4500",
                    emp_dob:"22yrs",
                    emp_bloodGroup:"O+",
                    emp_Adhar:"12345678912",
                    emp_Designation:"Student",
                },
                {
                    emp_name:"Jay Sarode",
                    emp_id:"ty1234",
                    emp_sal:"10000",
                    emp_city:"Pune",
                    emp_gender:"Male",
                    emp_marital:"Unmarried",
                    emp_phone:"7219711287",
                    emp_emailid:"akki@4500",
                    emp_dob:"22yrs",
                    emp_bloodGroup:"O+",
                    emp_Adhar:"12345678912",
                    emp_Designation:"Student",
                },
                {
                    emp_name:"Sai Sarode",
                    emp_id:"ty1234",
                    emp_sal:"10000",
                    emp_city:"Pune",
                    emp_gender:"Male",
                    emp_marital:"Unmarried",
                    emp_phone:"7219711287",
                    emp_emailid:"akki@4500",
                    emp_dob:"22yrs",
                    emp_bloodGroup:"O+",
                    emp_Adhar:"12345678912",
                    emp_Designation:"Student",
                },
                {
                    emp_name:"Om Sarode",
                    emp_id:"ty1234",
                    emp_sal:"10000",
                    emp_city:"Pune",
                    emp_gender:"Male",
                    emp_marital:"Unmarried",
                    emp_phone:"7219711287",
                    emp_emailid:"akki@4500",
                    emp_dob:"22yrs",
                    emp_bloodGroup:"O+",
                    emp_Adhar:"12345678912",
                    emp_Designation:"Student",
                },
            ],
        };
      }
    
render() {
    return (
       <>
        {this.state.employees.map(m=>{
            return(
                <>
                <section>
                    <article>
                        <table>
                            <thead>
                                <tr>
                                    <th>emp_Name</th>
                                    <th>emp_id</th>
                                    <th>emp_sal</th>
                                    <th>emp_city</th>
                                    <th>emp_gender</th>
                                    <th>emp_marital</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                    <td>{m.emp_name}</td>
                                    <td>{m.emp_id}</td>
                                    <td>{m.emp_sal}</td>
                                    <td>{m.emp_city}</td>
                                    <td>{m.emp_gender}</td>
                                    <td>{m.emp_marital}</td>
                                </tr>
                                </tbody>
                        </table>
                    </article>
                </section>
                </>
            );
        })}
            </>
        );
}}