import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import education from "./Courses.images/education.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./courses.css";
// import { Link} from 'react-scroll'

const cards = [
    { id: "#h1", course: "SSC", description: "Shree Siddhivinayak Classes provides comprehensive coaching and guidance to Maharashtra SSC board students with expert faculty, well-designed study material, and regular tests and assessments to ensure academic success." },
    { id: "#h2", course: "HSC", description: "Shree Siddhivinayak Classes provides comprehensive coaching and guidance to Maharashtra HSC Board students, helping them to excel in their studies and achieve their academic goals. Their programs cover all the key subjects, including Mathematics, Science, and Commerce, and are designed to build a strong foundation of knowledge and skills for future success." },
    { id: "#h3", course: "JEE", description: "Shree Siddhivinayak Classes provides comprehensive coaching for Maharashtra JEE Main aspirants, covering all the important topics and concepts necessary to excel in the exam. They offer expert guidance, practice materials, and regular assessments to help students achieve their academic goals." },
];
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
                            Check out the courses that we offer to the students in different branches and fields of study
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
                                            {card.course}
                                        </Typography>
                                        <Typography>{card.description}</Typography>
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
                                        {cards[0].course}
                                    </Typography>
                                    <Typography>{cards[0].description}</Typography>
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
                                        {cards[1].course}
                                    </Typography>
                                    <Typography>{cards[1].description}</Typography>
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
                                        {cards[2].course}
                                    </Typography>
                                    <Typography>{cards[2].description}</Typography>
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
