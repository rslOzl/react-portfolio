import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';




function App() {
  return (
    <div className="App">

      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
           <Header></Header>

        </Grid>
        <Grid item xs={12}>
                <Project></Project>
        </Grid>
        <Grid item xs={12}>
               <Footer></Footer>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}

export default App;
