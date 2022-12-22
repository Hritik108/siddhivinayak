
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
import { IconContext } from "react-icons";
import { FaFacebookF } from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {TbBallBasketball} from 'react-icons/tb';

import { createTheme, ThemeProvider } from '@mui/material/styles';

class AboutUsClassesTour extends React.Component{

    render (){
        const cards = [1, 2,3,4,5,6,7,8,9,10];
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
     ClassesTour
    </Typography>
  </Container>
</Box>
<Container sx={{ py: 8 }} maxWidth="lg">
<Grid container spacing={4}>
          
              <Grid item xs={12} sm={12} md={12}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} 
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '2%',
                    }}
                    image={images}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }} >
                    <Typography gutterBottom variant="h5" component="h2">
                      Mr Faculty
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.<br/>
                      This is a media card. You can use this section to describe the
                      content.<br/>
                      This is a media card. You can use this section to describe the
                      content.<br/>
                      This is a media card. You can use this section to describe the
                      content.<br/>
                      This is a media card. You can use this section to describe the
                      content.<br/>
                      This is a media card. You can use this section to describe the
                      content.<br/>
                    </Typography>
                  </CardContent>
                  {/* <CardActions> */}
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
                  {/* </CardActions> */}
                </Card>
              </Grid>
        
          </Grid>
  {/* <Container md={6} sm={6} xs={12} sx={{
    bgcolor: 'blue'
  }}>hello</Container>
  <Container md={6} sm={12} xs={12} sx={{
    bgcolor: 'pink'
  }}>nfodofo</Container> */}

         </Container>
         <Container sx={{ py: 8 }} maxWidth="lg">
         <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={2.4}  sx={{ display: 'flex'}}>
                <Card
                  sx={{ height: '100%', display: 'flex'  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '2%',
                    }}
                    image={images}
                    alt="random"
                  />
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
export default AboutUsClassesTour