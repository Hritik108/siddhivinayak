import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import education from "./Courses.images/education.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./courses.css";
// import { Link} from 'react-scroll'

const cards = [{ id: "#h1" }, { id: "#h2" }, { id: "#h3" }];
const theme = createTheme();
let n = 1;

export default function Courses() {
    return (
        <ThemeProvider theme={theme}>
            {/* <CssBaseline /> */}
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: "background.paper",
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
                            Student Courses
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don&apos;t simply skip over it entirely.
                        </Typography>
                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="lg">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            pt: "2%",
                                        }}
                                        image={education}
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Heading
                                        </Typography>
                                        <Typography>This is a media card. You can use this section to describe the content.</Typography>
                                    </CardContent>
                                    <CardActions>
                                        {/* <Button size="small">View</Button> */}
                                        <Button>
                                            <a href={card.id}> Read More</a>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                <Container sx={{ py: 8 }} maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={12} md={12} id="h1">
                            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        // 16:9
                                        pt: "2%",
                                    }}
                                    image={education}
                                    alt="random"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Mr Faculty
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe the content.
                                        <br />
                                        This is a media card. You can use this section to describe the content.
                                        <br />
                                        This is a media card. You can use this section to describe the content.
                                        <br />
                                        This is a media card. You can use this section to describe the content.
                                        <br />
                                        This is a media card. You can use this section to describe the content.
                                        <br />
                                        This is a media card. You can use this section to describe the content.
                                        <br />
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} id="h2">
                            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        // 16:9
                                        pt: "2%",
                                    }}
                                    image={education}
                                    alt="random"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Mr Faculty
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe the content.
                                        <br />
                                        This is a media card. You can use this section to describe the content.
                                        <br />
                                        This is a media card. You can use this section to describe the content.
                                        <br />
                                        This is a media card. You can use this section to describe the content.
                                        <br />
                                        This is a media card. You can use this section to describe the content.
                                        <br />
                                        This is a media card. You can use this section to describe the content.
                                        <br />
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} id="h3">
                            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        // 16:9
                                        pt: "2%",
                                    }}
                                    image={education}
                                    alt="random"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Mr Faculty
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe the content.
                                        <br />
                                        This is a media card. You can use this section to describe the content.
                                        <br />
                                        This is a media card. You can use this section to describe the content.
                                        <br />
                                        This is a media card. You can use this section to describe the content.
                                        <br />
                                        This is a media card. You can use this section to describe the content.
                                        <br />
                                        This is a media card. You can use this section to describe the content.
                                        <br />
                                    </Typography>
                                </CardContent>
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
            </main>
            {/* Footer */}
            {/* <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box> */}
            {/* End footer */}
        </ThemeProvider>
    );
}
