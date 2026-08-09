import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";
import { toast } from "react-toastify";

import {
    FaUsers,
    FaBuilding,
    FaMoneyBillWave,
    FaArrowRight,
    FaUserPlus,
    FaList
} from "react-icons/fa";

import { getAllEmployees } from "../services/EmployeeService";

function Dashboard() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {

        getAllEmployees()
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {
    console.error("Failed to fetch employees:", error);
    toast.error("Failed to Load Dashboard Data!");
});

    }, []);

    const totalEmployees = employees.length;

    const totalDepartments = new Set(
        employees.map((employee) => employee.department)
    ).size;

    const averageSalary =
        totalEmployees > 0
            ? employees.reduce(
                (total, employee) =>
                    total + Number(employee.salary),
                0
            ) / totalEmployees
            : 0;

    const recentEmployees = [...employees]
        .sort((a, b) => b.id - a.id)
        .slice(0, 5);

    return (

       <div className="container tricolour-border pt-4">

            {/* Dashboard Heading */}

            <h2 className="text-center mb-4">
                Employee Management Dashboard
            </h2>


            {/* Dashboard Cards */}

            <div className="row g-4 mb-5">

                <div className="col-md-4">

                    <DashboardCard
                    title="Employees"
                    value={totalEmployees}
                    icon={<FaUsers />}
                    color="bg-primary"
/>

                </div>

                <div className="col-md-4">

                    <DashboardCard
                    title="Departments"
                    value={totalDepartments}
                    icon={<FaBuilding />}
                    color="bg-success"
/>

                </div>

                <div className="col-md-4">

                    <DashboardCard
                    title="Average Salary"
                    value={`₹${averageSalary.toLocaleString("en-IN", {
                    maximumFractionDigits: 0
                    })}`}
                   icon={<FaMoneyBillWave />}
                   color="bg-warning"
/>

                </div>

            </div>


            {/* Recent Employees */}

            <div className="card shadow border-0 mb-4">

                <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">

                    <h5 className="mb-0">
                        Recent Employees
                    </h5>

                    <Link
                        to="/employees"
                        className="btn btn-light btn-sm"
                    >
                        View All <FaArrowRight />
                    </Link>

                </div>

                <div className="card-body p-0">

                    <div className="table-responsive">

                        <table className="table table-hover mb-0">

                            <thead className="table-light">

                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Department</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>

                            </thead>

                            <tbody>

                                {recentEmployees.length > 0 ? (

                                    recentEmployees.map((employee) => (

                                        <tr key={employee.id}>

                                            <td>{employee.id}</td>

                                            <td>
                                                {employee.fname} {employee.lname}
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

                                                <Link
                                                    to={`/view-employee/${employee.id}`}
                                                    className="btn btn-info btn-sm"
                                                >
                                                    View
                                                </Link>

                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td
                                            colSpan="6"
                                            className="text-center py-4 text-muted"
                                        >
                                            No employees available.
                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>


            {/* Quick Actions */}

            <div className="card shadow border-0 mb-4">

                <div className="card-header bg-primary text-white">

                    <h5 className="mb-0">
                        Quick Actions
                    </h5>

                </div>

                <div className="card-body">

                    <div className="row g-3">

                        <div className="col-md-6">

                            <Link
                                to="/add-employee"
                                className="btn btn-success w-100 py-3"
                            >
                                <FaUserPlus className="me-2" />
                                Add Employee
                            </Link>

                        </div>

                        <div className="col-md-6">

                            <Link
                                to="/employees"
                                className="btn btn-primary w-100 py-3"
                            >
                                <FaList className="me-2" />
                                View All Employees
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Dashboard;