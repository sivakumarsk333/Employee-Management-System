import React,{useEffect, useState} from 'react'

import { deleteemployee, listemployee } from '../Service/EmployeeService-1';//SERVICE LINE
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {

    const navigator=useNavigate();

    const[employees,setEmp]=useState([]);

    useEffect(()=>{
       getallemployee();
        
    },[])

    function getallemployee(){
         listemployee().then((response)=>{
            setEmp(response.data)
        }).catch(error=>{   
            console.error(error)
        })
    }

    function addnewemployee(){
        navigator('/add-employee')
    }

    function updateemployee(id){
        navigator(`/update-employee/${id}`)
    }

    function removeemployee(id){
        console.log(id)
        deleteemployee(id).then((response)=>{
             getallemployee();

        }).catch(error=>{
            console.error(error)
        })

    }

//     const dummydata=[
//         {
//         "id":1,
//         "FirstName":"siva",
//         "LastName":"kumar",
//         "email":"siva@"
//         },
//          {
//         "id":2,
//         "FirstName":"jaya",
//         "LastName":"kumar", 
//         "email":"jaya@"
//         }, {
//         "id":3,    
//         "FirstName":"bharath",
//         "LastName":"kumar",
//         "email":"bharath@"
//         }
// ]
  return (
    <div className='container'>
        <h2>List Of Employees</h2>
         <button className='btn btn-primary mb-2' onClick={addnewemployee}>ADD EMPLOYEE</button>
        <table className='table table-striped table-bordered'>
           
            <thead>
                <tr>
                    <th>Employee id</th>
                    <th>Employee Firstname</th>
                    {/* <th>Employee LastName</th> */}
                    <th>Employee email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee=>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            {/* <td>{employee.FirstName}</td> */}
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={()=>updateemployee(employee.id)}>update</button>
                                
                                <button className='btn btn-danger' onClick={()=>removeemployee(employee.id)}
                                    style={{marginLeft:'10px'}}>delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent