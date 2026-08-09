import { Link } from "react-router-dom";

import {
    FaUsers,
    FaServer,
    FaDatabase,
    FaCode,
    FaSearch,
    FaCheckCircle,
    FaBell
} from "react-icons/fa";

function About() {

    return (

        <div className="container">

            {/* Header */}

            <div className="text-center mb-5">

                <h2
                    className="fw-bold"
                    style={{ color: "var(--india-blue)" }}
                >
                    🇮🇳 Employee Management System
                </h2>

                <p className="text-muted">
                    A professional full-stack application for managing
                    employee information efficiently.
                </p>

            </div>


            {/* Project Overview */}

            <div className="card shadow border-0 mb-4">

                <div className="card-header bg-primary text-white">

                    <h5 className="mb-0">
                        About the Project
                    </h5>

                </div>

                <div className="card-body">

                    <p>
                        Employee Management System is a full-stack web
                        application designed to perform employee management
                        operations such as adding, viewing, updating and
                        deleting employee records.
                    </p>

                    <p className="mb-0">
                        The application follows a modern frontend-backend
                        architecture where React communicates with a
                        Spring Boot REST API, while employee data is
                        persisted in a MySQL database.
                    </p>

                </div>

            </div>


            {/* Technology Stack */}

            <div className="card shadow border-0 mb-4">

                <div className="card-header bg-dark text-white">

                    <h5 className="mb-0">
                        Technology Stack
                    </h5>

                </div>

                <div className="card-body">

                    <div className="row g-4">

                        <div className="col-md-3">

                            <div className="text-center">

                                <FaCode
                                    size={35}
                                    className="text-primary mb-2"
                                />

                                <h6 className="fw-bold">
                                    Frontend
                                </h6>

                                <p className="text-muted mb-0">
                                    React + Vite
                                </p>

                            </div>

                        </div>


                        <div className="col-md-3">

                            <div className="text-center">

                                <FaServer
                                    size={35}
                                    className="text-success mb-2"
                                />

                                <h6 className="fw-bold">
                                    Backend
                                </h6>

                                <p className="text-muted mb-0">
                                    Spring Boot
                                </p>

                            </div>

                        </div>


                        <div className="col-md-3">

                            <div className="text-center">

                                <FaDatabase
                                    size={35}
                                    className="text-warning mb-2"
                                />

                                <h6 className="fw-bold">
                                    Database
                                </h6>

                                <p className="text-muted mb-0">
                                    MySQL
                                </p>

                            </div>

                        </div>


                        <div className="col-md-3">

                            <div className="text-center">

                                <FaServer
                                    size={35}
                                    className="text-info mb-2"
                                />

                                <h6 className="fw-bold">
                                    API
                                </h6>

                                <p className="text-muted mb-0">
                                    REST API + Axios
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* Features */}

            <div className="card shadow border-0 mb-4">

                <div className="card-header bg-success text-white">

                    <h5 className="mb-0">
                        Key Features
                    </h5>

                </div>

                <div className="card-body">

                    <div className="row">

                        <div className="col-md-6">

                            <p>
                                <FaCheckCircle className="text-success me-2" />
                                Complete Employee CRUD Operations
                            </p>

                            <p>
                                <FaCheckCircle className="text-success me-2" />
                                Form Validation
                            </p>

                            <p>
                                <FaSearch className="text-primary me-2" />
                                Real-Time Employee Search
                            </p>

                            <p>
                                <FaCheckCircle className="text-success me-2" />
                                Pagination
                            </p>

                        </div>


                        <div className="col-md-6">

                            <p>
                                <FaBell className="text-warning me-2" />
                                Toast Notifications
                            </p>

                            <p>
                                <FaCheckCircle className="text-success me-2" />
                                Loading States
                            </p>

                            <p>
                                <FaUsers className="text-primary me-2" />
                                Dynamic Dashboard
                            </p>

                            <p>
                                <FaCheckCircle className="text-success me-2" />
                                Responsive UI
                            </p>

                        </div>

                    </div>

                </div>

            </div>


            {/* Developer */}

            <div className="card shadow border-0 mb-4">

                <div className="card-body text-center">

                    <h5 className="fw-bold">
                        Developed as a Full-Stack Project
                    </h5>

                    <p className="text-muted mb-3">
                        Employee Management System
                    </p>

                    <Link
                        to="/"
                        className="btn btn-primary"
                    >
                        Back to Dashboard
                    </Link>

                </div>

            </div>

        </div>

    );
}

export default About;