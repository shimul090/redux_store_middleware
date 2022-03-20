import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setproductlist, setproductlistThunk } from "./Redux/actions/index";
import { productListApi } from './Utils/api';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';



import Home from './Components/Home';
import ProductDetails from './Components/ProductDetails';
import Error from './Components/Error';
import Header from './Components/Header';
import AddProduct from './Components/AddProduct';

import { Routes, Route, Link, useNavigate } from "react-router-dom";

/*function App() {


  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  return (
      <Container fixed>
          <Typography variant="h1" component="h2" align="center" style={{color:"green", marginTop:'1rem'}}> 
              Counter: {counter}
          </Typography>
          <Stack spacing={2} direction="row" align="center">
              <Button variant="contained" onClick={() => dispatch(increment())}>Plus</Button>
              <Button variant="contained" onClick={() => dispatch(decrement())}>Minus</Button>
          </Stack>
      </Container>

  );
}*/

function App() {
    const {products} = useSelector((store) => store.product);
    const dispatch = useDispatch();
    const productList = products;
    //const [productList, setProductList] = useState([]);
    const [prodDetails, setProdDetails] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc");

    const navigate = useNavigate();


    useEffect(() => {
        dispatch(setproductlistThunk());
    }, [sortOrder]);

    /*const fetch_data = async() => {
        const response = await fetch(`https://fakestoreapi.com/products?sort=${sortOrder}`);
        const jsonData = await response.json();
        console.log(jsonData, "****jsonData");
    }
    fetch_data();*/

    function addItem() {
        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>alert("New item's id = "+ json.id));
    }

    function deleteItem(id) {
        fetch(`https://fakestoreapi.com/products/${id}`,{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=> alert("The deleted item's title: "+json.id));
    }


    function showProductList() {
        setProdDetails(null);
        navigate("/");
    }

    function getDetails(id) {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>{setProdDetails(json);
            });
        navigate(`/product-details/${id}`);
    }

    return(
        <>
            <Header />
            <Routes>
                {
                    prodDetails ? ( <Route path="/product-details/:id" element={<ProductDetails prodDetails={prodDetails} showProductList={showProductList} />} /> ) :
                    <Route path="/" element={<Home productList={productList} getDetails={getDetails} setSortOrder={setSortOrder} addItem={addItem} deleteItem={deleteItem} />} />
                }
            <Route path="*" element={<Error />} />
         </Routes>
         </>
    );
}

export default App;
