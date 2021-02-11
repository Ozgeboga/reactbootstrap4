import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "./Carousel"
import products from "../data/products.json"
import ProductCard from "./products/ProductCard" 
//import Footer from "./Footer"

function Home(props) {



    const productItemsShow = products.results.filter(item => !item.isActive).map(
        item => (
            <div className="col-sm mt-3" >
                
                <ProductCard
                    title={item.title}
                    id={item.id}
                    detail={item.detail}
                />
            </div>
        )
    )

    return (
        <>
        <hr className="my-3"/>
        <Carousel />
        <hr className="my-3"/>
        <h3 className="text-center"> <i class="far fa-gem"></i> Fav Sprits From All Over The World <i class="far fa-gem"></i></h3>
        <hr className="my-3 "/>
        <div className="row">
            {productItemsShow}
        </div>

       
            
        </>
    )
}

export default Home
