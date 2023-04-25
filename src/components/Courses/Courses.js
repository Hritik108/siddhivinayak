import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./courses.css";
// import { Link} from 'react-scroll'

const cards = [
    {
        id: "#h1",
        course: "SSC",
        description:
            "Shree Siddhivinayak Classes provides comprehensive coaching and guidance to Maharashtra SSC board students with expert faculty, well-designed study material, and regular tests and assessments to ensure academic success.",
    },
    {
        id: "#h2",
        course: "HSC",
        description:
            "Shree Siddhivinayak Classes provides comprehensive coaching and guidance to Maharashtra HSC Board students, helping them to excel in their studies and achieve their academic goals. Their programs cover all the key subjects, including Mathematics, Science, and Commerce, and are designed to build a strong foundation of knowledge and skills for future success.",
    },
    {
        id: "#h3",
        course: "JEE",
        description:
            "Shree Siddhivinayak Classes provides comprehensive coaching for Maharashtra JEE Main aspirants, covering all the important topics and concepts necessary to excel in the exam. They offer expert guidance, practice materials, and regular assessments to help students achieve their academic goals.",
    },
];
const theme = createTheme();
let n = 1;

export default function Courses() {
    let courseDetails = {
        title:
            "Special Features of Shree Siddhivinayak Classes for SSC Students",
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
    };
    return (
        <div className="container mt-5 text-center">
            <img
                src="https://ischoolconnect.com/blog/wp-content/uploads/2021/10/564.jpg"
                alt=""
            />
            <h1 className="text-start">SSC</h1>
            <p className="text-start">
                Shree Siddhivinayak Classes provides comprehensive coaching and
                guidance to Maharashtra SSC board students with expert faculty,
                well-designed study material, and regular tests and assessments
                to ensure academic success.
            </p>
            <div className="d-flex row mx-auto w-75 text-center mb-3">
                <h2 className="my-3">{courseDetails.title}</h2>
                {courseDetails.features.map((feature) => {
                    return (
                        <div className="col-sm-3">
                            <div className="card w-100 h-100">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {feature.featureTitle}
                                    </h5>
                                    <p className="card-text">
                                        {feature.featureDescription}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
