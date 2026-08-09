import { useState } from "react";
import { createEmployee } from "../services/EmployeeService";
import { toast } from "react-toastify";

function AddEmployee() {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [salary, setSalary] = useState("");

    const [loading, setLoading] = useState(false);

    const [errors, setErrors] = useState({
        fname: "",
        lname: "",
        email: "",
        department: "",
        salary: ""
    });


    function validateForm() {

        let valid = true;

        const errorsCopy = {
            fname: "",
            lname: "",
            email: "",
            department: "",
            salary: ""
        };

        if (fname.trim()) {
            errorsCopy.fname = "";
        } else {
            errorsCopy.fname = "First Name is required.";
            valid = false;
        }

        if (lname.trim()) {
            errorsCopy.lname = "";
        } else {
            errorsCopy.lname = "Last Name is required.";
            valid = false;
        }

        if (email.trim()) {

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                errorsCopy.email = "Enter a valid email.";
                valid = false;
            }

        } else {
            errorsCopy.email = "Email is required.";
            valid = false;
        }

        if (department.trim()) {
            errorsCopy.department = "";
        } else {
            errorsCopy.department = "Department is required.";
            valid = false;
        }

        if (salary > 0) {
            errorsCopy.salary = "";
        } else {
            errorsCopy.salary = "Salary must be greater than zero.";
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }


    const saveEmployee = (e) => {

        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);

        const employee = {
            fname,
            lname,
            email,
            department,
            salary
        };

        createEmployee(employee)
            .then((response) => {

                console.log(response.data);

                toast.success(
                    "Employee Added Successfully!"
                );

                setFname("");
                setLname("");
                setEmail("");
                setDepartment("");
                setSalary("");

                setErrors({
                    fname: "",
                    lname: "",
                    email: "",
                    department: "",
                    salary: ""
                });

            })
            .catch((error) => {

                console.error(error);

                toast.error(
                    "Failed to Add Employee!"
                );

            })
            .finally(() => {

                setLoading(false);

            });
    };


    return (

        <div className="container">

            <div className="row justify-content-center">

                <div className="col-md-8">

                    <div className="card shadow">

                        <div className="card-header bg-primary text-white">

                            <h3 className="text-center mb-0">
                                Add Employee
                            </h3>

                        </div>

                        <div className="card-body">

                            <form onSubmit={saveEmployee}>

                                {/* First Name */}

                                <div className="mb-3">

                                    <label className="form-label">
                                        First Name
                                    </label>

                                    <input
                                        type="text"
                                        className={`form-control ${
                                            errors.fname
                                                ? "is-invalid"
                                                : ""
                                        }`}
                                        placeholder="Enter First Name"
                                        value={fname}
                                        onChange={(e) =>
                                            setFname(e.target.value)
                                        }
                                    />

                                    <div className="invalid-feedback">
                                        {errors.fname}
                                    </div>

                                </div>


                                {/* Last Name */}

                                <div className="mb-3">

                                    <label className="form-label">
                                        Last Name
                                    </label>

                                    <input
                                        type="text"
                                        className={`form-control ${
                                            errors.lname
                                                ? "is-invalid"
                                                : ""
                                        }`}
                                        placeholder="Enter Last Name"
                                        value={lname}
                                        onChange={(e) =>
                                            setLname(e.target.value)
                                        }
                                    />

                                    <div className="invalid-feedback">
                                        {errors.lname}
                                    </div>

                                </div>


                                {/* Email */}

                                <div className="mb-3">

                                    <label className="form-label">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        className={`form-control ${
                                            errors.email
                                                ? "is-invalid"
                                                : ""
                                        }`}
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />

                                    <div className="invalid-feedback">
                                        {errors.email}
                                    </div>

                                </div>


                                {/* Department */}

                                <div className="mb-3">

                                    <label className="form-label">
                                        Department
                                    </label>

                                    <input
                                        type="text"
                                        className={`form-control ${
                                            errors.department
                                                ? "is-invalid"
                                                : ""
                                        }`}
                                        placeholder="Enter Department"
                                        value={department}
                                        onChange={(e) =>
                                            setDepartment(e.target.value)
                                        }
                                    />

                                    <div className="invalid-feedback">
                                        {errors.department}
                                    </div>

                                </div>


                                {/* Salary */}

                                <div className="mb-3">

                                    <label className="form-label">
                                        Salary
                                    </label>

                                    <input
                                        type="number"
                                        className={`form-control ${
                                            errors.salary
                                                ? "is-invalid"
                                                : ""
                                        }`}
                                        placeholder="Enter Salary"
                                        value={salary}
                                        onChange={(e) =>
                                            setSalary(e.target.value)
                                        }
                                    />

                                    <div className="invalid-feedback">
                                        {errors.salary}
                                    </div>

                                </div>


                                {/* Buttons */}

                                <div className="d-flex justify-content-center gap-3">

                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                        disabled={loading}
                                    >

                                        {loading ? (

                                            <>
                                                <span
                                                    className="spinner-border spinner-border-sm me-2"
                                                    role="status"
                                                ></span>

                                                Saving...
                                            </>

                                        ) : (

                                            "Save Employee"

                                        )}

                                    </button>


                                    <button
                                        type="reset"
                                        className="btn btn-secondary"
                                        disabled={loading}
                                        onClick={() => {

                                            setFname("");
                                            setLname("");
                                            setEmail("");
                                            setDepartment("");
                                            setSalary("");

                                            setErrors({
                                                fname: "",
                                                lname: "",
                                                email: "",
                                                department: "",
                                                salary: ""
                                            });

                                        }}
                                    >
                                        Reset
                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default AddEmployee;