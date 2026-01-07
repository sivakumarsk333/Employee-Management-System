import axios from "axios";

const REST_API_URL_SK='http://localhost:8080/api/arise';

export const listemployee=()=>axios.get(REST_API_URL_SK);

// export const createemployee=(employees)=>axios.post(REST_API_URL_SK,employees);

export const createemp=(employee)=>axios.post(REST_API_URL_SK,employee);

export const getEmployee=(employeeId)=>axios.get(REST_API_URL_SK  + '/' + employeeId);  // validation in placeholder

export const updateemployee=(employeeId,employee)=>axios.put(REST_API_URL_SK + '/' + employeeId,employee); // update

export const deleteemployee=(employeeId)=>axios.delete( REST_API_URL_SK + '/' + employeeId)   //delete