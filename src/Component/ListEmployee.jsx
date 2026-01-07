import React,{useEffect, useState} from 'react'
import { listemp } from '../Service/EmployeeService'

const ListEmployee = () => {


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

const [employees,setEmployees]=useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        listemp().then((response)=>{
            setEmployees(response.data || []);
        }).catch(err =>{
            console.error(err);
            setError(err.message || 'Failed to load employees')
        }).finally(()=> setLoading(false))

    },[])


  return (
    <div className='container'>
        <h2>LIST ALL EMPLOYEE</h2>
        <table className='table table-striped table-bordered'>
         <thead>
            <tr>
                <th>employee id</th>
                {/* <th>employee FirstName</th> */}
                 <th>employee Name</th>
                {/* <th>employee LastName</th> */}
                <th>employee email</th>
            </tr>
         </thead>

         <tbody>
            {
                (employees || []).map(employee =>
                    <tr key={employee.id}>
                        <td>{employee.id} </td>
                        <td>{employee.name} </td>
                        <td>{employee.email} </td>
                    </tr>
                )
            }

         </tbody>

        </table>

    </div>
  )
}

export default ListEmployee