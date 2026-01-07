import React,{useState,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom'

import { getEmployee, updateemployee } from '../Service/EmployeeService-1'
import { createemp } from '../Service/EmployeeService-1'




const Employmentsk = () => {

    const [name,setname]=useState('')
    const [email,setemail]=useState('')

    const navi=useNavigate();

    const {id}=useParams();   

    const [errors,seterrors]=useState({
        name:"",
        email:""
    })
         
     //get employee update changes
    
        useEffect(()=>{      
            if(id){
                getEmployee(id).then((response)=>{
                    setname(response.data.name)
                    setemail(response.data.email)
                }).catch(error=>{
                    console.error(error);
                })
            }
    
        },[id])

function updateEmployee(id) {
    navigate(`/update-employee/${id}`);
}

    function handlename(s){
        setname(s.target.value);
    }
    function handleemail(s){
        setemail(s.target.value);
    }

    function saveOrUpdateEmployee(s){
        s.preventDefault();
        
        if(validationform()){ //validation after
             const employeesk={name,email}
        console.log(employeesk)

        if(id){
            updateemployee(id,employeesk).then((response)=>{
                console.log(response.data)
                 navi('/employees')
            }).catch(error=>{
                console.error(error)
            })
        } else {

             createemp(employeesk).then((response)=>{ ///post method
            console.log(response.data);
            navi('/employees')
        }).catch(error=>{
            console.error(error)
        })

        }

        }

       

        // const employeesk={name,email}  // validation before
        // console.log(employeesk)

        // createemp(employeesk).then((response)=>{ ///post method
        //     console.log(response.data);
        //     navi('/employees')
        // });
    }

    //FORM VALIDATION CHECK
    function validationform(){
        let valid=true;
        const errorcopy={...errors}

        if(name.trim()){
            errorcopy.firstname='';
        }
        else{
            errorcopy.firstname='First Name is Required';
            valid = false;
        }

        if(email.trim()){
            errorcopy.email='';
        }
        else{
            errorcopy.email='email is Required';
            valid = false;
        }

        seterrors(errorcopy);
        return valid;

    }

    function pagetitle(){
        if(id){
           return <h2 className='text-centre'>Update Employee</h2>
        }
        else{
          return  <h2 className='text-centre'>Add Employee</h2>
        }
    }

  return (
    <div>
<div className='container'>
            <br />
            <br />
            <br />
            <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3 '>
                    {pagetitle()}
                    <div className='card-body'>
                        <form >
                            <div className='form-group mb-3'>
                                <label className='form-label'>first Name :</label>
                                 <input 
                                 type='text'
                                 placeholder='Enter Your FirstName'
                                 value={name}
                                 className={`form-control${errors.name ? 'is - invalid':''} `}
                                 onChange={handlename}/>
                                {errors.name && <div className='invalid-feedback'> {errors.name} </div>}
                            </div>

                            

                             <div className='form-group mb-3'>
                                <label className='form-label'>email :</label>
                                 <input 
                                 type='text'
                                 placeholder='Enter Your Email'
                                 value={email}
                                 className={`form-control${errors.email ? 'is - invalid':''} `}
                                 onChange={handleemail}/>
                                {errors.email && <div className='invalid-feedback'> {errors.email} </div>}
                            </div>
                            <button className='btn btn-success' onClick={saveOrUpdateEmployee}>submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Employmentsk