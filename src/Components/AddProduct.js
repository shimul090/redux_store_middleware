import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';


const AddProduct = () => {	
	return(
		<Container style={{marginTop:"3rem"}}>
			<Typography gutterBottom variant="h3" align="center">
				Add Product
			</Typography>
			<Card style={{maxWidth:600, margin:"0 auto", padding:"20px 5px"}}>
				<CardContent>
					<form>
						<Grid container spacing={1}>
							<Grid xs={12} item align="center">
								<TextField label="Product Name" placeholder="Enter Product Name" variant="outlined" fullWidth required/>
							</Grid>
							<Grid xs={12} item>
								<TextField label="Product Category" placeholder="Enter Product category" variant="outlined" fullWidth required/>
							</Grid>
							<Grid xs={12} item>
								<TextField label="Product Description" placeholder="Enter Product description" variant="outlined" fullWidth required/>
							</Grid>
							<Grid xs={12} item align="right">
								<Button variant="contained" color="primary">Submit</Button>
							</Grid>
						</Grid>
					</form>
				</CardContent>
			</Card>
		</Container>
	);
}

export default AddProduct;