import React , {useEffect , useState} from 'react'
import {useDispatch , useSelector} from 'react-redux';
import {productAction,filterbyNameAction,addtocartAction} from"../redux/actions/productAction";
import Product from './Product'
import {Container , Row ,Form} from 'react-bootstrap'

function Products() {
   const dispatch = useDispatch();
   
   let {products} = useSelector(state => state.productreducer);
   let [searchName , setSearchName] = useState("");
   let [searchCatalog , setSearchCatalog] = useState("");
   

   useEffect(() => {
    filterbyName(searchName)
   }, [searchName])
   

  let filterbyName = (searchName) =>{

     filterbyNameAction(dispatch,searchName);
  }

  // let filterbyCatalog = (searchCatalog) =>{
  //   filterbyName(dispatch,searchCatalog); 
  // }


//   let getallProducts = () =>{
//     productAction(dispatch);
// }
  
//   useEffect(() => {
//     getallProducts();
//   },[])


  let AddToCart = (id) => {
    addtocartAction(dispatch,id)
  }
  
  return (
    
    <div className="text-center bg-red-300 p-14"> 
    <Container>
        <h1>products</h1>
        <Form clasName="w-50" >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                
                <Form.Control type="text" placeholder="Search by Name ------------------" className="w-50 mx-auto my-5 p-3 border-warning border-2 rounded-pill d-inline mr-5" onChange={(e)=> setSearchName(e.target.value)}/>
                <Form.Select aria-label="Default select example" className="w-25 mx-auto my-5 p-3        border-warning border-2 rounded-pill d-inline " onChange={(e)=> setSearchCatalog(e.target.value)}>
                <option>choose category</option>
                <option>All</option>
                <option value="speaker">speaker</option>
                <option value="headphone">headphone</option>
                <option value="mouse">mouse</option>
                <option value="keyboard">keyboard</option>
                <option value="airpod">airpod</option>
                <option value="powerbank">powerbank</option>
              </Form.Select>
            </Form.Group>
        </Form>
        <div className="products-center text-gray-900"> 
        <Row>   
            {
             products && products.length>0 ?( products.map((product)=> {
                return(
                  <Product product={product} AddToCart={()=>AddToCart(product._id)} />
                ) 
            })):<p>no products</p>
            
            }
          </Row>  
        </div>
    </Container>
    </div>
    
  )
}

export default Products