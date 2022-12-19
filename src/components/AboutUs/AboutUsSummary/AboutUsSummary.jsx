
import React from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import images from "./education.jpg";
import boy from "./download.png"
import { IconContext } from "react-icons";
import { FaFacebookF } from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {TbBallBasketball} from 'react-icons/tb';

import { createTheme, ThemeProvider } from '@mui/material/styles';

class AboutUsSummary extends React.Component{

    render (){
        const cards = [1, 2,3,4];
        const theme = createTheme();
return (<ThemeProvider theme={theme}>
    <main>
    <Box
  sx={{
    bgcolor: 'background.paper',
    pt: 8,
    pb: 6,
  }}
>
  <Container maxWidth="sm">
    <Typography
      component="h1"
      variant="h3"
      align="center"
      color="text.primary"
      gutterBottom
    >
     About US Summary 
    </Typography>
  </Container>
</Box>
<Container style={{}} sx={{ py: 8 }} maxWidth="lg"> 
     {/* backgroundImage: `url(${images})`
     backgroundColor: '#e8f9fd'
     */}
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  
                  style={{backgroundColor: 'transparent',
                  boxShadow: 'none',
                }} 
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '2%',
                      width:'50%',
                      margin:'auto'
                    }}
                    image={boy}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      30 Years
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">View</Button> */}
                    {/* <span style={border: '3px solid'}><FaFacebookF size={25} /></span> */}
                    {/* <IconContext.Provider   value={{ color: 'blue', size: '35px'}} >
                        <div>
                            <FaFacebookF />
                        </div>
                        
                        <div>
                            <FaTwitter />
                        </div>
                       
                         <div>
                            < TbBallBasketball />
                        </div>
                    </IconContext.Provider> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        
</main>
        </ThemeProvider>
)
    }
}
export default AboutUsSummary