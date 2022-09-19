import React , {useEffect , useState} from 'react'
import {useDispatch , useSelector} from 'react-redux';
import {filterbyNameAction,addtocartAction,filterbyCategoryAction,bannerClose} from"../redux/actions/productAction";
import Product from './Product'
import {Container , Row ,Form ,Col} from 'react-bootstrap'




function Products() {
   const dispatch = useDispatch();
   
   let {products} = useSelector(state => state.productreducer);
   let {prods} = useSelector(state => state.productreducer);
   let {cat} = useSelector(state => state.productreducer);

   
   let [searchName , setSearchName] = useState("");
   let [searchCatalog , setSearchCatalog] = useState("all"); 

   useEffect(() => {
    filterbyName(searchName);
    filterbyCatalog(searchCatalog)
    console.log(prods);
   }, [searchName,searchCatalog])
   

  let filterbyName = (searchName) =>{

     filterbyNameAction(dispatch,searchName);
  }

  let filterbyCatalog = (searchCatalog) =>{
    filterbyCategoryAction(dispatch,searchCatalog); 
  }


  let AddToCart = (id) => {
    addtocartAction(dispatch,id)
    setTimeout(() => {
      bannerClose(dispatch);
  }, 1000);
  }
  
  return (
    
    <div className=""> 
    <Container>
        <h1 className="text-center mt-2">products</h1>
        <Form clasName="w-50" >
            <Form.Group className=" d-flex justify-content-between" controlId="formBasicEmail">
                
                <Form.Control type="text" placeholder="Search by Name ------------------" className="forminput w-50 my-5 p-2 border-dark border-2 rounded-pill d-inline-block " onChange={(e)=> setSearchName(e.target.value)}/>
                <Form.Select aria-label="Default select example" className=" forminput w-25  my-5 p-2  border-dark d-flex justify-content-start
 border-2 rounded-pill d-inline-block  " onChange={(e)=> setSearchCatalog(e.target.value)}>
                <option value="all">All</option>
                <option value="speaker">speaker</option>
                <option value="headphone">headphone</option>
                <option value="mouse">mouse</option>
                <option value="keyboard">keyboard</option>
                <option value="airpod">airpod</option>
                <option value="powerbank">powerbank</option>
              </Form.Select>
            </Form.Group>
        </Form>
        <div className="products-center text-gray-900 text-center"> 
        <Row>   
          
            {
             products && products.length>0 && searchName==="" && searchCatalog==="all"&&( products.map((product)=> {
                return(
                  <Col className="col col-md-6 col-lg-3">
                  <Product product={product} AddToCart={()=>AddToCart(product._id)} />
                  </Col>
                ) 
            }))
            
            }
            {
             prods && prods.length>0 && searchName !=="" && searchCatalog==="all" &&( prods.map((product)=> {
                return(
                  <Col className="col col-md-6 col-lg-3">
                  <Product product={product} AddToCart={()=>AddToCart(product._id)} />
                  </Col>
                ) 
            }))
            }
            {
             cat && cat.length>0 && searchCatalog!=="all" &&( cat.map((product)=> {
                return(
                  <Col className="col col-md-6 col-lg-3">
                  <Product product={product} AddToCart={()=>AddToCart(product._id)} />
                  </Col>
                ) 
            }))
            }
            {
              prods && prods.length===0 && <p className="fs-2 fw-2 my-5">no products matched</p>  
            }  
          </Row>  
        </div>
    </Container>
    </div>
    
  )
}

export default Products