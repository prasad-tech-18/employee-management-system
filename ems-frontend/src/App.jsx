import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

import Dashboard from "./pages/Dashboard";
import AddEmployee from "./pages/AddEmployee";
import EmployeeList from "./pages/EmployeeList";
import UpdateEmployee from "./pages/UpdateEmployee";
import ViewEmployee from "./pages/ViewEmployee";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {

    return (

        <BrowserRouter>

            <div className="d-flex flex-column min-vh-100">

                <Navbar />

                <main className="container my-4 flex-grow-1">

                    <Routes>

                        {/* Dashboard */}

                        <Route
                            path="/"
                            element={<Dashboard />}
                        />


                        {/* Employee List */}

                        <Route
                            path="/employees"
                            element={<EmployeeList />}
                        />


                        {/* Add Employee */}

                        <Route
                            path="/add-employee"
                            element={<AddEmployee />}
                        />


                        {/* Update Employee */}

                        <Route
                            path="/update-employee/:id"
                            element={<UpdateEmployee />}
                        />


                        {/* View Employee */}

                        <Route
                            path="/view-employee/:id"
                            element={<ViewEmployee />}
                        />


                        {/* About */}

                        <Route
                            path="/about"
                            element={<About />}
                        />


                        {/* 404 - Keep this LAST */}

                        <Route
                            path="*"
                            element={<NotFound />}
                        />

                    </Routes>

                </main>


                <Footer />

            </div>


            {/* Global Toast Notifications */}

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
            />

        </BrowserRouter>

    );
}

export default App;