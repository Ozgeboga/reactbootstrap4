import React from "react"
import { Link } from "react-router-dom"
import links from "../data/links"
import "bootstrap/dist/css/bootstrap.min.css"
import {Container ,Row} from "react-bootstrap"



function NavBar(props) {

    const linkItems = links.filter(item => item.isLink).map((item, index) =>

        <li className="nav-link text-white font-weight-bold" key={index}>
            <Link to={item.link} className="nav-link">

                {item.title}

            </Link>
        </li>
    )


    return (
 <Container>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
            <div className="container-fluid">
                <Link className="navbar-brand" to="./"><i class="fas fa-gifts"></i></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Row>
                <div className="col-sm">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav ">
                        {linkItems}
                    </div>
                </div>

                </div>
                </Row>
            </div>
        </nav>

        </Container>

    )
}

export default NavBar
