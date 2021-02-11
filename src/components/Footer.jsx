import React from 'react';
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css"

function Footer(props) {

    return (
        <>
            
            <footer className="bg text-center text-lg-start my-5">

                <div className="container p-4">

                    <div className="row">

                        <div className="col-sm list-unstyled tr">
                            <h5 >Do you need help?</h5>
                            <li>
                                <Link className="text-dark" to="/hakkimizda">Contact</Link>
                            </li>
                            <li>
                                <Link className="text-dark" to="/">Coockie preferences</Link>
                            </li>


                        </div>

                        <div className="col-sm ">
                            <h5 >Us</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <Link to="/sirket" className="text-dark">Company</Link>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">Work With Us</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">Press Room</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-sm ">
                            <h5 >Payment Methods</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!" className="text-dark">Visa</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">MasterCard</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">American Express</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </footer>

        </>
    )
}

export default Footer