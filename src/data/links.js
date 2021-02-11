import Home from "../components/Home"
import Products from "../components/products/Products"
import About from "../components/About"
import ProductDetail from "../components/products/ProductDetail"
import Search from "../components/Search"
import Company from "../components/Company"
//import Cart from "../components/Cart"
import Footer from "../components/Footer"

const links = [
    {link:"/" , title: "Home" , component : Home , isExact : true , isLink : true },
    {link:"/urunler" , title: "Products" , component : Products , isExact : true , isLink : true },
    {link:"/hakkimizda" , title: "About" , component : About , isExact : true , isLink : true },
    {link:"/sirket" , title: "Company" , component : Company , isExact : true , isLink : true },
    { link: "/urunler/:productID", title: "Ürün Detayı", component: ProductDetail, isExact: false, isLink: false },
    { link: "/arama", title: "Arama", component: Search, isExact: false, isLink: false },
    
    { link: "/iletisim", title: "Footer", component: Footer , isExact: true, isLink: false}
]

export default links