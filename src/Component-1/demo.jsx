// import React,{useEffect, useState} from 'react'
// import { createEmployee } from '../Service/EmployeeService'
// import { useNavigate } from 'react-router-dom'



// const EmployeeComponent = () => {

//     const [name,setfirstname]=useState('')
//     const [lastName,setlastname]=useState('')
//     const [email,setemail]=useState('')

//     const navigator=useNavigate();



//     function handlefirstname(e){
//         setfirstname(e.target.value); 
//     }
//     function handlelastname(e){
//         setlastname(e.target.value); 
//     }
//      function handleemail(e){
//         setemail(e.target.value); 
//     }

//     function saveEmployee(e){
//         e.preventDefault();
//         const employee={name,email}
//         console.log(employee)

//         createEmployee(employee).then((response)=>{
//             console.log(response.data);
//             navigator('/employee')
//         })  
//     }

//   return (
//     <div>
//         <div className='container'>
//             <br />
//             <br />
//             <br />
//             <br />
//             <div className='row'>
//                 <div className='card col-md-6 offset-md-3 offset-md-3 '>
//                     <h2 className='text-centre'>Add Employee</h2>
//                     <div className='card-body'>
//                         <form >
//                             <div className='form-group mb-2'>
//                                 <label className='form-label'>first Name :</label>
//                                  <input 
//                                  type='text'
//                                  placeholder='Enter Your FirstName'
//                                  value={firstName}
//                                  className='form-control' 
//                                  onChange={handlefirstname}/>

//                             </div>

//                             <div className='form-group mb-2'>
//                                 <label className='form-label'>Last Name :</label>
//                                  <input 
//                                  type='text'
//                                  placeholder='Enter Your LastName'
//                                  value={lastName}
//                                  className='form-control' 
//                                  onChange={handlelastname}/>

//                             </div>

//                              <div className='form-group mb-2'>
//                                 <label className='form-label'>email:</label>
//                                  <input 
//                                  type='text'
//                                  placeholder='Enter Your Email'
//                                  value={email}
//                                  className='form-control' 
//                                  onChange={handleemail}/>

//                             </div>
//                             <button className='btn btn-success' onClick={saveEmployee}>submit</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default EmployeeComponent