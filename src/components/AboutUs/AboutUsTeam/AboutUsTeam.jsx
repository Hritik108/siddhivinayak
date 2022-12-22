import React from "react";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { IconContext } from "react-icons";
import { FaFacebookF } from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {TbBallBasketball} from 'react-icons/tb';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import faculty from './education.jpg'
import { border } from "@mui/system";
import { createTheme, ThemeProvider } from '@mui/material/styles';

class AboutUsTeam extends React.Component{

    render (){
        const cards = [1, 2];
        const theme = createTheme();

        return (<ThemeProvider theme={theme}><main>
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
              Our Team
            </Typography>
            {/* <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography> */}
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '2%',
                    }}
                    image={faculty}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Mr Faculty
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">View</Button> */}
                    {/* <span style={border: '3px solid'}><FaFacebookF size={25} /></span> */}
                    <IconContext.Provider   value={{ color: 'blue', size: '35px'}} >
                        <div>
                            <FaFacebookF />
                        </div>
                        
                        <div>
                            <FaTwitter />
                        </div>
                       
                         <div>
                            < TbBallBasketball />
                        </div>
                    </IconContext.Provider>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </main>
      </ThemeProvider>);
    }

}

export default AboutUsTeam;