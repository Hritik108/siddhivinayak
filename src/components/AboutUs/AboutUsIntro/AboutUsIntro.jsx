import React from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

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
              Welcome to Shree Siddhivinayak Classes
            </Typography>
          
          </Container>
          </Box>
          <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={12}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography color="text.primary" textAlign={"justify"}>
                 <p> As we approach the 21st century we find our systems and the world around us changing with rapidity, bringing us face to face with newer realities, forcing us to renew and reset our objectives. An objective always has a commitment to the future. 
                 </p> 
                  <p>
                  Shree Siddhivinayak Classes was started by Girish Ranawat and is a well-known educational institution that has been providing quality education to students for several years. The institution is committed to providing an excellent academic experience to its students through a variety of well-organized curricular and co-curricular programs and projects. 
                  </p>
                  <p>
                  The institution is equipped with top-class faculty members who are easily accessible to students. The classrooms are air-conditioned and soundproofed with audio-visual aids to ensure a comfortable and efficient learning environment for the students.
                  </p>
                  <p>
                  Shree Siddhivinayak Classes offers coaching in the fields of Science and Commerce, with a strong focus on competitive exams such as JEE, NEET, MHT-CET, CET, CA, CS, and CMA. The institution's experienced and qualified faculty members provide students with a solid foundation in the subjects, ensuring that they are well-prepared for the competitive exams.
                  </p>
                  <p>
                  In addition to academic excellence, Shree Siddhivinayak Classes also places a strong emphasis on vocational training. The institution aims to impart practical vocational training to its students so that they can become productive and self-sufficient members of society.
                  </p>
                  <p>
                  One of the unique features of Shree Siddhivinayak Classes is its one-to-one mentoring program. The program is designed to provide personalized attention and guidance to students, with mentors working closely with students to identify their strengths and weaknesses and help them achieve their academic and career goals. The institution believes that each student has unique potential, and the mentoring program is designed to help students realize their full potential.
                  </p>
                  <p>
                  Overall, Shree Siddhivinayak Classes is a comprehensive educational institution that is dedicated to providing quality education and training to its students. With a focus on academic excellence, vocational training, and one-to-one mentoring, the institution is well-equipped to help students achieve their academic and career goals.
                  </p>
                </Typography>
              </CardContent>
            </Grid>
            </Grid>
          </Container>
      </div>
    );
  }
}

export default AboutUsIntro;
