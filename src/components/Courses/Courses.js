import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./courses.css";
import { CardGroup, Card, Container, Row, Col, Button } from "react-bootstrap";


//importing images
import school from "../../assets/images/school.jpg";
import college from "../../assets/images/college.png";
import main from "../../assets/images/29493.jpg";

let courseDetails = {
  title: "Special Features of Shree Siddhivinayak Classes for SSC Students",
  features: [
    {
      featureTitle: "Experienced Faculty",
      featureDescription:
        "The institute has a team of highly experienced and dedicated faculty members who provide personalized attention to each student and help them improve their academic performance.",
    },
    {
      featureTitle: "Comprehensive Study Material",
      featureDescription:
        "Shree Siddhivinayak Classes provides comprehensive study material that covers the entire SSC syllabus, including solved examples and practice questions.",
    },
    {
      featureTitle: "Regular Assessments",
      featureDescription:
        "The institute conducts regular assessments, including mock tests and practice papers, to help students evaluate their progress and identify areas for improvement.",
    },
    {
      featureTitle: "Doubt-solving Sessions",
      featureDescription:
        "Shree Siddhivinayak Classes conducts regular doubt-solving sessions, where students can clarify their doubts and get individual attention from the faculty.",
    },
  ],
  courses: [
    {
      id: "#h1",
      course: "SSC",
      description:
        "Shree Siddhivinayak Classes provides comprehensive coaching and guidance to Maharashtra SSC board students with expert faculty, well-designed study material, and regular tests and assessments to ensure academic success.",
      image: school,
    },
    {
      id: "#h2",
      course: "HSC",
      description:
        "Shree Siddhivinayak Classes provides comprehensive coaching and guidance to Maharashtra HSC Board students, helping them to excel in their studies and achieve their academic goals. Their programs cover all the key subjects, including Mathematics, Science, and Commerce, and are designed to build a strong foundation of knowledge and skills for future success.",
      image: college,
    },
    {
      id: "#h3",
      course: "JEE",
      description:
        "Shree Siddhivinayak Classes provides comprehensive coaching for Maharashtra JEE Main aspirants, covering all the important topics and concepts necessary to excel in the exam. They offer expert guidance, practice materials, and regular assessments to help students achieve their academic goals.",
      image: school,
    },
  ],
  main_courses: [
    {
      name: "SSC",
      description:
        "Secondary School Certificate (SSC) is a public examination taken by students in Bangladesh, India, and Pakistan after successful completion of ten years of schooling.",
      image: "https://source.unsplash.com/_uGpxZMkHXE/600x400",
    },
    {
      name: "HSC",
      description:
        "Higher Secondary Certificate (HSC) is an examination taken by students in Bangladesh, India, and Pakistan after successful completion of twelve years of schooling.",
      image: "https://source.unsplash.com/GcEJ0c-ZPb8/600x400",
    },
    {
      name: "JEE",
      description:
        "Joint Entrance Examination (JEE) is an engineering entrance examination conducted for admission to various engineering colleges in India.",
      image: "https://source.unsplash.com/VFZ_kGu-TmU/600x400",
    },
    {
      name: "NEET",
      description:
        "National Eligibility cum Entrance Test (NEET) is an entrance examination in India for students who wish to study undergraduate medical courses and dental courses.",
      image: "https://source.unsplash.com/gzt-6L1uLYc/600x400",
    },
    {
      name: "CET",
      description:
        "Common Entrance Test (CET) is an entrance examination in India for admission to various professional courses like engineering, medical, and management.",
      image: "https://source.unsplash.com/gzt-6L1uLYc/600x400",
    },
  ],
};

const theme = createTheme();
let n = 1;

function Courses_heading() {
  return (
    <img
      src={main}
      alt=""
      className="img-fluid"
    />
  );
}

function Courses_cards() {
  return (
    <div>
      <Row>
        <Col>
          <CardGroup className="mx-auto" style={{ gap: "20px" }}>
            {courseDetails.courses.map((feature) => {
              return (
                <Card
                  border="dark"
                  
                  style={{
                    borderWidth: "0px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={feature.image}
                    className="img-fluid"
                  />
                  <Card.Body>
                    <Card.Title>{feature.course}</Card.Title>
                    <Card.Text>{feature.description}</Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </CardGroup>
        </Col>
      </Row>
    </div>
  );
}

export default function Courses() {
  return (
    <div>
        <Courses_heading />
    
    <Container >
      
      <Courses_cards />
    </Container>
    </div>
  );
}

// <div className="d-flex row mx-auto w-75 text-center mb-3">
//         <h2 className="my-3">{courseDetails.title}</h2>
//         {courseDetails.features.map((feature) => {
//           return (
//             <div className="col-sm-3">
//               <div className="card w-100 h-100">
//                 <div className="card-body">
//                   <h5 className="card-title">{feature.featureTitle}</h5>
//                   <p className="card-text">{feature.featureDescription}</p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
