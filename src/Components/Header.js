import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Header = () => {
	return(
		<Container>
			<Typography variant="h3" component="h2" align="center" style={{color:"green"}}>
  				Fake API Store
			</Typography>
		</Container>
	);
}

export default Header;