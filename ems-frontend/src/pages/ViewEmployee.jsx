import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getEmployeeById } from "../services/EmployeeService";

function ViewEmployee() {

    const { id } = useParams();

    const [employee, setEmployee] = useState({
        id: "",
        fname: "",
        lname: "",
        email: "",
        department: "",
        salary: ""
    });

    useEffect(() => {

        getEmployeeById(id)
            .then((response) => {
                setEmployee(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

    }, [id]);

    return (

        <div className="container">

            <div className="row justify-content-center">

                <div className="col-md-8">

                    <div className="card shadow">

                        <div className="card-header bg-primary text-white">
                            <h3 className="text-center">
                                Employee Details
                            </h3>
                        </div>

                        <div className="card-body">

                            <table className="table table-bordered">

                                <tbody>

                                    <tr>
                                        <th>ID</th>
                                        <td>{employee.id}</td>
                                    </tr>

                                    <tr>
                                        <th>First Name</th>
                                        <td>{employee.fname}</td>
                                    </tr>

                                    <tr>
                                        <th>Last Name</th>
                                        <td>{employee.lname}</td>
                                    </tr>

                                    <tr>
                                        <th>Email</th>
                                        <td>{employee.email}</td>
                                    </tr>

                                    <tr>
                                        <th>Department</th>
                                        <td>{employee.department}</td>
                                    </tr>

                                    <tr>
                                        <th>Salary</th>
                                        <td>₹ {employee.salary}</td>
                                    </tr>

                                </tbody>

                            </table>

                            <div className="text-center">

                                <Link
                                    to="/employees"
                                    className="btn btn-secondary"
                                >
                                    Back
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default ViewEmployee;