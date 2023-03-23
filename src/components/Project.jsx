import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { data } from '../mockData/data'

import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';

export default class Project extends Component {

  render() {
    return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4} padding={6}>
      {data.map((res) => 

<Grid item xs={12}
  sm={6}
  md={4}
>
<Card sx={{ maxWidth: 900 }} style={{margin:'auto', padding:20}} >
         <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                   {res.projectName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {res.updatedOn}
         
                  </Typography>
                  <Typography variant="body3" color="text.secondary">
                  {res.teckhStacks}
         
                  </Typography>
                  <Typography variant="body4" color="text.secondary">
                  {res.description}
         
                  </Typography>
                </CardContent>
               <CardActions
               
               className='button-container'
        sx={{
          paddingX: 0,
          placeSelf: 'center',
          width: '100%',
          justifyContent: 'space-evenly',
          alignItems: 'space-evenly',
        }}
               
               >

               <Button
          href={'homepageUrl'}
          target='_blank'
          variant='contained'
          startIcon={<HomeIcon />}
        >
          Homepage
        </Button>
        <Button
          href={'githubUrl'}
          target='_blank'
          variant='contained'
          startIcon={<GitHubIcon />}
        >
          Github
        </Button>
               </CardActions>
             </Card>
     
        </Grid>
       
       )}
 
      
    
      </Grid>
    </Box>
  );
  }
}
