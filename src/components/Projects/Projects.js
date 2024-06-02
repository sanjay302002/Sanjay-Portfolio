import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/Nesavu.png";
import chatify from "../../Assets/Projects/Planmart.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Planmart"
              description="Planmart, an event organizing website, seamlessly developed with HTML, CSS, SQL, PHP, Formspree, and Cognito Forms streamlines
              event management for planning, scheduling, execution, and post-event analysis.
              On Amazon S3 (Simple Storage Service) is a smart move. It’s reliable, scalable, and integrates well with GitHub."
              ghLink="https://github.com/sanjay302002/Planmart-"
              demoLink="https://sanjay302002.github.io/Planmart-/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="QRCloudGen"
              description="This project entails creating a serverless QR code generator on AWS Cloud, ensuring real-time generation, scalability, cost-effectiveness, and
              secure data handling. Leveraging AWS Lambda, API Gateway, and DynamoDB, it facilitates dynamic QR code creation for various
              applications, offering a seamless solution for businesses and developers.
              "
              ghLink="https://github.com/sanjay302002/cloudway1"
              /*demoLink="https://blogs.soumya-jit.tech/"*/
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="NESAVU"
              description="Nesavu, an Ecommerce platform built with HTML, CSS, and JS specializes in weaving instruments for handloom and powerloom products.
              With a user-friendly interface, it facilitates weavers access to affordable tools, providing both cash on delivery and online payment options.
              Seamlessly integrating technology, it acts as a cost-effective resource hub, empowering weavers in their craft."
              ghLink="https://github.com/sanjay302002/Nesavu-Ecommerce"
              demoLink="https://nesavu.netlify.app/"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;


/*<Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>*/