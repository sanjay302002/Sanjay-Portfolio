import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import frontend from "../../Assets/Projects/frontend.jpg";
import uiux from "../../Assets/Projects/uiux.jpg";

import devops from "../../Assets/Projects/devops.jpg";
// import AutomatedCICD from "../../Assets/Projects/Automated CICD.png";

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
              imgPath={uiux}
              isBlog={false}
              title="UI / UX"
              // description="Planmart, an event organizing website, seamlessly developed with HTML, CSS, SQL, PHP, Formspree, and Cognito Forms streamlines
              // event management for planning, scheduling, execution, and post-event analysis.
              // On Amazon S3 (Simple Storage Service) is a smart move. It’s reliable, scalable, and integrates well with GitHub."
              // ghLink="https://github.com/sanjay302002/Planmart-"
              demoLink="https://sanjay302002.github.io/Planmart-/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devops}
              isBlog={false}
              title="DEVOPS"
//               description="Developed dynamic website for Milestone Promotion, showcasing villas and apartments. Integrated user-friendly interfaces and scheduling
// system, ensuring accuracy of content. Collaborated on marketing strategies for enhanced visibility. Employed responsive design and SEO techniques for optimal performance."
              // ghLink="https://github.com/MILESTONEPROMOTERS"
              demoLink="https://milestonepromoters.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={frontend}
              isBlog={false}
              title="FRONTEND"
              // description="Nesavu, an Ecommerce platform built with HTML, CSS, and JS specializes in weaving instruments for handloom and powerloom products.
              // With a user-friendly interface, it facilitates weavers access to affordable tools, providing both cash on delivery and online payment options.
              // Seamlessly integrating technology, it acts as a cost-effective resource hub, empowering weavers in their craft."
              // ghLink="https://github.com/sanjay302002/Nesavu-Ecommerce"
              demoLink="https://nesavu.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            {/* <ProjectCard
              ghLink="https://github.com/sanjay302002/Nesavu-Ecommerce"
              demoLink="https://nesavu.netlify.app/"              
            /> */}
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AutomatedCICD}
              isBlog={false}
              title="Automated CI/CD"
              description="Automated CI/CD Pipeline Implementation 2024
Designed and implemented a fully automated CI/CD pipeline to enhance software delivery efficiency and reliability. Utilized tools such as
Jenkins, Github CI and Docker to automate the build, test, and deployment processes. Ensured robust infrastructure management using
Ansible, with comprehensive monitoring and alerting through Grafana."
              ghLink="https://github.com/sanjay302002/cicd-test"
              // demoLink="https://nesavu.netlify.app/"              
            />
          </Col> */}
          
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
