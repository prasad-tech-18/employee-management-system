import axios from "axios";

const REST_API_BASE_URL =
    "http://localhost:9091/api/employees";


const apiClient = axios.create({
    baseURL: REST_API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});


// Centralized API Error Handling

apiClient.interceptors.response.use(

    (response) => {
        return response;
    },

    (error) => {

        if (error.response) {

            console.error(
                "API Error:",
                error.response.status,
                error.response.data
            );

        } else if (error.request) {

            console.error(
                "Server is not responding."
            );

        } else {

            console.error(
                "Request Error:",
                error.message
            );

        }

        return Promise.reject(error);
    }

);


// Create Employee

export const createEmployee = (employee) => {
    return apiClient.post("", employee);
};


// Get All Employees

export const getAllEmployees = () => {
    return apiClient.get("");
};


// Get Employee By ID

export const getEmployeeById = (employeeId) => {
    return apiClient.get(`/${employeeId}`);
};


// Update Employee

export const updateEmployee = (employeeId, employee) => {
    return apiClient.put(`/${employeeId}`, employee);
};


// Delete Employee

export const deleteEmployee = (employeeId) => {
    return apiClient.delete(`/${employeeId}`);
};