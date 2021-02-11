import React from "react";
import {Card } from "react-bootstrap"
import {Link} from "react-router-dom"


function ProductCard(props){




    return(
        <Card border="secondary">
          
  <Card.Img variant="top" src={`https://picsum.photos/id/${props.id}/400/300`} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
    {props.detail}
    </Card.Text>
    <Link to={`/urunler/${props.id}`} className="btn btn-secondary">Show Details</Link>
  </Card.Body>
</Card>

    )


}

export default ProductCard