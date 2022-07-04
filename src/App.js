import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import ErrorPage from "./ErrorPage";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/blogs/:id" element={<BlogDetails />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}


export default App;