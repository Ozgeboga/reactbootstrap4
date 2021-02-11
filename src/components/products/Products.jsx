import React from "react"
import products from "../../data/products.json"
import ProductCard from "./ProductCard"
//import Search from "../Search"

function Products(props) {

    const productItems = products.results.filter(item => item.isActive).map(
        item => (
            <div className="col-sm mt-3" >
                
                <ProductCard
                    title={item.title}
                    id={item.id}
                    detail={item.detail}
                    img={item.img}
                />
            </div>
        )
    )

    return (

            <>
           
            <h1 className="text-start">Products</h1>
            <hr/>
            
            <hr/>

            <div className="row">
                {productItems}
            </div>

            </>
    )
}

export default Products