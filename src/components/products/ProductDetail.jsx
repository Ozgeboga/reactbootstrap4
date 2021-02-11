import React from 'react';
import { useParams, Link } from "react-router-dom"
import products from "../../data/products.json"

function ProductDetail(props) {
    const params = useParams()
    const { productID } = params


    const product = products.results.filter(
        item => item.id === Number(productID)
    ).map(
        item =>
            <div key={item.id}>
                <h1>{item.title}</h1>
                <img src={item.img} alt=""/>
                <p>{item.detail}</p>
            </div>
    )





    return (
        <>

        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Ana Sayfa</Link></li>
                <li className="breadcrumb-item"><Link to="/urunler">Urunler</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Detay</li>
            </ol>
        </nav>
        <hr />

        {product}
        </>
    )
}

export default ProductDetail