import { Link, NavLink } from "react-router-dom";

import {
    FaHome,
    FaUsers,
    FaUserPlus,
    FaInfoCircle
} from "react-icons/fa";

function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg shadow-sm ems-navbar">

            <div className="container">

                <Link
                    className="navbar-brand fw-bold text-white"
                    to="/"
                >
                    🇮🇳 EMS
                </Link>


                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">

                            <NavLink
                                to="/"
                                className="nav-link text-white"
                            >
                                <FaHome className="me-1" />
                                Dashboard
                            </NavLink>

                        </li>


                        <li className="nav-item">

                            <NavLink
                                to="/employees"
                                className="nav-link text-white"
                            >
                                <FaUsers className="me-1" />
                                Employees
                            </NavLink>

                        </li>


                        <li className="nav-item">

                            <NavLink
                                to="/add-employee"
                                className="nav-link text-white"
                            >
                                <FaUserPlus className="me-1" />
                                Add Employee
                            </NavLink>

                        </li>


                        <li className="nav-item">

                            <NavLink
                                to="/about"
                                className="nav-link text-white"
                            >
                                <FaInfoCircle className="me-1" />
                                About
                            </NavLink>

                        </li>

                    </ul>

                </div>

            </div>

        </nav>

    );
}

export default Navbar;