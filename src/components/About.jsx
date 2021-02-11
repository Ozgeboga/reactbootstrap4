import React from "react"
import {Container} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css"


function About (props) {

    return (
        <>
        <Container className="height">
        <div className="card border-0 shadow my-5">
            <div className="card-body">
        <hr/>
        <h1>About this project. </h1>
        <hr/>

        <p>
This project is an assignment of Kodluyoruz.org Full Stack Web Development Bootcamp.</p>

<ul>
            Used Technologies :
            <li className="mt-5">Reactjs 
            
            </li>
            <li>Bootstrap

            </li>
            <li>React-Bootstrap</li>
            </ul>
        
        <p>Feel free to review on Stackblitz <i class="fas fa-bolt"></i></p>
        <ul>
            
            <a href="https://stackblitz.com/edit/react-wgqyay">Go to Stackblitz</a>
        </ul>

        <p>Designer :</p>
        <p>Özge Boğa</p>

        <ul className="list-unstyled">
            <li><i class="fab fa-linkedin fa-lg"></i> <a href="https://www.linkedin.com/in/ozgeboga11/">Visit on LinkedIn</a> </li>
        </ul>
        </div>
        </div>
        </Container>
        </>
    )
}

export default About
