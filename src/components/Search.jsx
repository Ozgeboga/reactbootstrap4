import React , {useRef, useState , useEffect} from 'react'
import {useHistory ,useLocation , Link} from "react-router-dom"
import products from "../data/products.json"

function Search (props){

    const history = useHistory()
    const location = useLocation()


    const params = new URLSearchParams(location.search)
    const q = params.get("q")
    console.log(q)


    const inputValue = useRef()
    const [searchResult , setSearchResult] = useState([])
    
 

    useEffect(
        
        () => { 
            if (q){

                inputValue.current.value = q ? q : ""

                const productResults = products.results.filter(item => 
                    item.title.toLowerCase().includes(q.toLowerCase())).map(
                        item => 

                        <li key={item.id} class="list-group-item">
                            <Link to={`/urunler/${item.id}`}> {item.title} </Link>

                        </li>
                        )

                        setSearchResult(productResults)
                        console.log(productResults)
            }


            console.log(new Date())



    } , [q])




    function handleSubmit (event) {
        event.preventDefault()
        history.push(`/ara?q=${inputValue.current.value}`)

    }
    return(
            <>
            <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label for="exampleInputEmail1">Search Products</label>
    <input
      name="q"
      ref={inputValue}
      type="text"
      className="form-control"
      id="search" 
     />
    
  </div>
  
  <button onClick={handleSubmit} type="submit" className="btn btn-primary">Search</button>
</form>
<ul className="list-group">
                <li className="list-group-item">An item</li>
                {searchResult}
            </ul>
          
            </>
    )
}


export default Search 