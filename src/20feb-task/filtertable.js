import {Component} from "react";

class Filtertable extends Component{
    constructor(){
        super()
        this.state={
            filter:[
                {Name:"durga", Designation: "React-Developer", Salary: 40000 },

                 {Name: "bhavani", Designation: "Angular", Salary: 35000},
 
                  {Name: "john", Designation: "JavaScript", Salary: 38000 },

                  {Name: "ram", Designation: "React-Developer", Salary: 30000 },

                  {Name: "nani", Designation: "JavaScript", Salary: 25000},

                  {Name: "Venkat", Designation: "Angular", Salary: 32000 },

                  {Name: "Sai", Designation: "React-Developer", Salary: 52000},

                  {Name: "gagan", Designation: "Angular", Salary: 20000},

                  {Name: "prasanna", Designation: "JavaScript", Salary: 29500 },

                  {Name: "lakshmi", Designation: "React-Developer", Salary: 43000 }
            ],
            data:[
                {Name:"durga", Designation: "React-Developer", Salary: 40000 },

                 {Name: "bhavani", Designation: "Angular", Salary: 35000},
 
                  {Name: "john", Designation: "JavaScript", Salary: 38000 },

                  {Name: "ram", Designation: "React-Developer", Salary: 30000 },

                  {Name: "nani", Designation: "JavaScript", Salary: 25000},

                  {Name: "Venkat", Designation: "Angular", Salary: 32000 },

                  {Name: "Sai", Designation: "React-Developer", Salary: 52000},

                  {Name: "gagan", Designation: "Angular", Salary: 20000},

                  {Name: "prasanna", Designation: "JavaScript", Salary: 29500 },

                  {Name: "lakshmi", Designation: "React-Developer", Salary: 43000 }
            ]
        }

    }

    filter1=()=>{
        let result1=this.state.data.filter((item)=>item.Designation==="React-Developer")
        console.log(result1)
        this.setState(
            {
                filter:result1
            }
        )
    }

    filter2=()=>{
        let result2=this.state.data.filter((item)=>item.Designation==="JavaScript")
        console.log(result2)
        this.setState(
    {
        filter:result2
    
    }  )
    
    }


    filter3=()=>{
        let result3=this.state.data.filter((item)=>item.Designation==="Angular")
        console.log(result3)
        this.setState(
    {
        filter:result3
    
    }    )
     }

     resetfilter=()=>{
        this.setState(
            {
                filter:this.state.data
            }
        )
     }

     render()
     {
         const tablestyle= {
             borderCollapse: 'collapse',
             border:"2px solid black",
             padding : "10px",
             marginTop: "40px",
         }
 
         const thstyle = {
             borderCollapse: 'collapse',
             border:"2px solid black",
             padding : "10px"
         }
 
         return(
 
        
             <div>
                 <table style={tablestyle}>
                     <tr>
                         <th style={thstyle}>Names</th>
                         <th style={thstyle}>Designation</th>
                         <th style={thstyle}>Salary</th>
                     </tr>
                     {
                         this.state.filter.map((Items)=>{
                         
                             return(
                             <tr>
                                 <td style={thstyle}>{Items.Name}</td>
                                 <td style={thstyle}>{Items.Designation}</td>
                                 <td style={thstyle}>{Items.Salary}</td>
                             </tr>
                         )})
                     }
 
                 </table>
 
                 <div className="buttons">
                 <button onClick={this.filter1}>React</button>
                 <button onClick={this.filter2}>JavaScript</button>
                 <button onClick={this.filter3}>Angular</button>
                 <button onClick={this.resetfilter}>Reset</button>
                 </div>
             </div>
         )
     }
}
export default Filtertable;

