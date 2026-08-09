import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

function NotFound() {

    return (

        <div className="container">

            <div className="row justify-content-center">

                <div className="col-md-8">

                    <div className="card shadow border-0 text-center">

                        <div className="card-body py-5">

                            <div
                                className="rounded-circle bg-warning d-flex align-items-center justify-content-center mx-auto mb-4"
                                style={{
                                    width: "90px",
                                    height: "90px",
                                    color: "#fff",
                                    fontSize: "40px"
                                }}
                            >
                                <FaExclamationTriangle />
                            </div>

                            <h1
                                className="display-1 fw-bold"
                                style={{
                                    color: "var(--india-blue)"
                                }}
                            >
                                404
                            </h1>

                            <h2 className="fw-bold mb-3">
                                Page Not Found
                            </h2>

                            <p className="text-muted mb-4">
                                Sorry, the page you are looking for
                                does not exist or may have been moved.
                            </p>

                            <Link
                                to="/"
                                className="btn btn-primary px-4 py-2"
                            >
                                <FaHome className="me-2" />
                                Back to Dashboard
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default NotFound;