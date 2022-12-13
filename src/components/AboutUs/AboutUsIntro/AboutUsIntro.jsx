import React from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import Intro from "./education.jpg"
// import {Item} from "@mui/icons-material"
class AboutUsIntro extends React.Component {
  render() {
    return (
      <div className="AboutUsIntro">
        <Box
          sx={{
            bgcolor: "background.paper",
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
              Welcome to Siddhivinayk
            </Typography>
            {/* <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography> */}
          </Container>
          </Box>
        <Container maxWidth="lg">
          {/* <h1>AboutUsintro...ehehehhehe</h1> */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CardContent sx={{ flexGrow: 1 }}>
                {/* <Typography gutterBottom variant="h5" component="h2">
                  Heading
                </Typography> */}
                <Typography color="text.secondary" textAlign={"justify"}>
                  As we approach the 21st century we find our systems and the
                  world around us changing with rapidity, bringing us face to
                  face with newer realities, forcing us to renew and reset our
                  objectives. An objective always has a commitment to the
                  future. 
                  <br/>
                  <br/>
                  S.V.EDU CENTRE is consciously striving to achieve
                  peaks of excellence in the academic field as well as in the
                  life itself through a large variety of well organized
                  curricular and co-curricular programs and projects. Now S.V.
                  EDU CENTRE includes Top Class faculty members who are very
                  much accessible to students with an air conditioned and sound
                  proof audio visual classrooms. 
                  <br/>
                  <br/>
                  Gainful Vocational Training has
                  also been a prime objective of the S.V.EDU CENTRE (in
                  association with SWAMI VIVEKANANDA EDUCATIONAL INSTITUTION),
                  aimed at imparting practical vocational training to the young
                  so that they can stand on their own feet and become productive
                  and earning member of the society. 
                  <br/>
                  <br/>
                  Due the recent changes in
                  the S.S.C., H.S.C syllabus also in Engineering and medical
                  entrances exam formats, we are well aware of the anxiety that
                  parents and students feel today. By God’s blessings and with
                  dedicated team of expert faculties we entered in 30th academic
                  year. In our 35 years of teaching experience, we dealt with
                  situations like the current one several times. Our experience
                  has proven that there is only one solution to such situations.
                  <br/>
                  <br/>
                  We great interest in the field of Education we build courage
                  in students mind, “If you have the courage to begin, you have
                  the courage to succeed.”
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} md={6}>
              <CardContent sx={{ flexGrow: 1 }}>
              <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '2%',
                    }}
                    image={Intro}
                    alt="random"
                  />
               <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '2%',
                    }}
                    image={Intro}
                    alt="random"
                  />
              </CardContent>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default AboutUsIntro;
