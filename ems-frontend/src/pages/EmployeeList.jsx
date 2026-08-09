import { useEffect, useState } from "react";
import { getAllEmployees, deleteEmployee } from "../services/EmployeeService";
import { Link } from "react-router-dom";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

function EmployeeList() {

    const [employees, setEmployees] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;

    const [loading, setLoading] = useState(true);
    const [deletingId, setDeletingId] = useState(null);


    useEffect(() => {
        fetchEmployees();
    }, []);


    function fetchEmployees() {

        setLoading(true);

        getAllEmployees()
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {

                console.error(error);

                toast.error("Failed to Load Employees!");

            })
            .finally(() => {

                setLoading(false);

            });
    }


    function removeEmployee(id) {

        setDeletingId(id);

        deleteEmployee(id)
            .then(() => {

                toast.success("Employee Deleted Successfully!");

                fetchEmployees();

            })
            .catch((error) => {

                console.error(error);

                toast.error("Failed to Delete Employee!");

            })
            .finally(() => {

                setDeletingId(null);

            });
    }


    const filteredEmployees = employees.filter((employee) =>
        employee.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.lname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.department.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const lastIndex = currentPage * recordsPerPage;

    const firstIndex = lastIndex - recordsPerPage;

    const currentEmployees =
        filteredEmployees.slice(firstIndex, lastIndex);

    const totalPages =
        Math.ceil(filteredEmployees.length / recordsPerPage);


    return (

        <div className="container">

            <h2 className="text-center mb-4">
                Employee List
            </h2>


            {/* Search */}

            <div className="row mb-3">

                <div className="col-md-6">

                    <input
                        type="text"
                        className="form-control"
                        placeholder="🔍 Search by Name, Email or Department..."
                        value={searchTerm}
                        onChange={(e) => {

                            setSearchTerm(e.target.value);

                            setCurrentPage(1);

                        }}
                    />

                </div>

            </div>


            {/* Loading */}

            {loading ? (

                <div className="text-center py-5">

                    <div
                        className="spinner-border text-primary"
                        role="status"
                    >

                        <span className="visually-hidden">
                            Loading...
                        </span>

                    </div>

                    <p className="mt-3 text-muted">
                        Loading employees...
                    </p>

                </div>

            ) : (

                <>

                    {/* Employee Table */}

                    <div className="table-responsive">

                        <table className="table table-bordered table-hover shadow">

                            <thead className="table-dark">

                                <tr>

                                    <th>ID</th>

                                    <th>First Name</th>

                                    <th>Last Name</th>

                                    <th>Email</th>

                                    <th>Department</th>

                                    <th>Salary</th>

                                    <th>Actions</th>

                                </tr>

                            </thead>


                            <tbody>

                                {currentEmployees.length > 0 ? (

                                    currentEmployees.map((employee) => (

                                        <tr key={employee.id}>

                                            <td>
                                                {employee.id}
                                            </td>

                                            <td>
                                                {employee.fname}
                                            </td>

                                            <td>
                                                {employee.lname}
                                            </td>

                                            <td>
                                                {employee.email}
                                            </td>

                                            <td>
                                                {employee.department}
                                            </td>

                                            <td>
                                                ₹ {Number(employee.salary).toLocaleString("en-IN")}
                                            </td>


                                            <td>

                                                {/* View */}

                                                <Link
                                                    to={`/view-employee/${employee.id}`}
                                                    className="btn btn-info btn-sm me-2"
                                                >

                                                    <FaEye />

                                                </Link>


                                                {/* Update */}

                                                <Link
                                                    to={`/update-employee/${employee.id}`}
                                                    className="btn btn-warning btn-sm me-2"
                                                >

                                                    <FaEdit />

                                                </Link>


                                                {/* Delete */}

                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() =>
                                                        removeEmployee(employee.id)
                                                    }
                                                    disabled={
                                                        deletingId === employee.id
                                                    }
                                                >

                                                    {deletingId === employee.id ? (

                                                        <>

                                                            <span
                                                                className="spinner-border spinner-border-sm me-1"
                                                                role="status"
                                                            ></span>

                                                            Deleting...

                                                        </>

                                                    ) : (

                                                        <FaTrash />

                                                    )}

                                                </button>

                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td
                                            colSpan="7"
                                            className="text-center text-danger fw-bold py-4"
                                        >

                                            No Employees Found

                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>


                    {/* Pagination */}

                    <div className="d-flex justify-content-between align-items-center mt-3">

                        <button
                            className="btn btn-outline-primary"
                            disabled={currentPage === 1}
                            onClick={() =>
                                setCurrentPage(currentPage - 1)
                            }
                        >
                            Previous
                        </button>


                        <span className="fw-bold">

                            Page {currentPage} of {totalPages || 1}

                        </span>


                        <button
                            className="btn btn-outline-primary"
                            disabled={
                                currentPage === totalPages ||
                                totalPages === 0
                            }
                            onClick={() =>
                                setCurrentPage(currentPage + 1)
                            }
                        >
                            Next
                        </button>

                    </div>

                </>

            )}

        </div>

    );
}

export default EmployeeList;