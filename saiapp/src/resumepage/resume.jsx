import { Component } from "react";
import "./resume.css";

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Resume extends Component {
  render() {
    return (
      <>
        <div className="head">
          <h2 className="name">Bandi. Saikumar</h2>
          <h3>Fresher </h3>
        </div>
        <div className="menu-list">
          <ul className="menu">
            <li className="menuone">
              <a className=" stickybox" href="#about">About</a>
            </li>
            <li className="menuone">
              <a  className=" stickybox" href="#education">Education</a>
            </li>
            <li className="menuone">
              <a className=" stickybox"  href="#skills">Skills</a>
            </li>
            <li className="menuone">
              <a className=" stickybox"  href="#projects">Projects</a>
            </li>
            <li className="menuone">
              <a className=" stickybox"  href="#certifications">Certifications</a>
            </li>
            <li className="menuone">
              <a className=" stickybox"  href="#contact">Contact</a>
            </li>
            

          </ul>
          
        </div>


        <Nav className="navbar">
        <NavDropdown title="Menu" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1"><a className=" stickybox" href="#about">About</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2"><a  className=" stickybox" href="#education">Education</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3"><a className=" stickybox"  href="#skills">Skills</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3"><a className=" stickybox"  href="#projects">Projects</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3"><a className=" stickybox"  href="#certifications">Certifications</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3"> <a className=" stickybox"  href="#contact">Contact</a></NavDropdown.Item>
        
        {/* <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
        </Nav>
        {/* <div className="col-md-2">
                <button type="button" className="navbar-toggler"  data-toggle="collapse" data-target="#collapsible-navbar"><ion-icon name="add-outline"></ion-icon><span class="navbar-toggler-icon"></span></button>
			    <div className="collapse navbar-collapse" id="collapsible-navbar">
                    <div className="navagationbar">
                        <ul className="unorderlist">
                            <li className="nav-item one "><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item one "><a className="nav-link" href="#education">Education</a></li>
                            <li className="nav-item one "><a className="nav-link" href="#skills">Skills</a></li>
                            <li className="nav-item one "><a className="nav-link" href="#projects">Projects</a></li>
                            <li className="nav-item one "><a className="nav-link" href="#certifications">Certification</a></li>
                            <li className="nav-item one "><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
        </div> */}
        <div className="summary" >
          <div className="summary-inner" id="about">
            <h2>Summary : </h2> 
            <hr width="100%" color="red" size="100px"></hr>
            <p>
              As a passionate and motivated fresher, I am actively learning a
              diverse set of web development skills to build a strong foundation
              in the tech industry. I have been immersing myself in HTML and CSS
              to create visually appealing and responsive web pages. My journey
              in JavaScript has equipped me with the ability to add
              interactivity and dynamic elements to my projects. I'm currently
              exploring JSON for efficient data interchange between client and
              server. To enhance my front-end development capabilities, I am
              diving into React.js, learning how to build user interfaces that
              are both engaging and efficient. Additionally, I am expanding my
              knowledge of cloud services through AWS, understanding how to
              deploy applications in a scalable environment. I am also acquiring
              skills in SQL for effective database management and data
              manipulation. On the back-end side, I am getting hands-on
              experience with Node.js, which allows me to create server-side
              applications seamlessly. Lastly, I am familiarizing myself with
              GitHub for version control, ensuring my code is organized and
              collaborates well in team settings. My eagerness to learn and
              adapt drives my ambition to become a proficient developer
            </p>
          </div>
        </div>
        <div className="summary" >
          <div className="summary-inner" id="education">
            <h2>Education:</h2><hr width="100%" color="red" size="100px"></hr>
            <div className="education">
                <p>B. Tech in Electronics and Communication Engineering</p>
                <p>2021-2024</p>
            </div>
            <div className="education">
                <p>Vaagdevi College of Engineering, Warangal</p>
                <p>CGPA: 7.63</p>
            </div>&nbsp;
            <div className="education">
                <p>Diploma in Electronics and Communication Engineering</p>
                <p>2018-2021</p>
            </div>
            <div className="education">
                <p>VMR Polytechnic College, Warangal</p>
                <p>CGPA: 7.73</p>
            </div>
          </div>
        </div>
        <div className="summary" id="skills">
            <div className="summary-inner">
                <h2>Skills:</h2> <hr width="100%" color="red" size="100px"></hr>
                    <div className="skills">
                        <h3>Technical</h3>
                            <ul className="technical">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Bootstrap</li>
                                <li>Java Script</li>
                                <li>React</li>
                                <li>Node</li>
                                <li>SQL</li>
                            </ul>
                    </div>
                    <div className="skills">
                        <h3>Softskills</h3>
                            <ul className="technical">
                                <li>Time Management</li>
                                <li>Adaptive and Flexible</li>
                                <li>Team Player</li>
                                <li>Self-Motivated</li>
                                <li>Problem-Solving</li>
                                <li>Networking</li>
                            </ul>
                    </div>    
            </div>
        </div>
        <div className="summary" id="projects">
            <div className="summary-inner">
                <h2>Projects:</h2> <hr width="100%" color="red" size="100px"></hr>
                <div className="project">
                    <div className="skills">
                        <h3>PANTRY SYSTEM IN THEATERS using RF Transmission </h3>
                            <ul className="technical">
                                <li>It was designed to enhance the overall customer experience by providing convenient access to refreshments and snacks.</li>
                                <li>A User-Friendly Display Had Developed for Cinema Theatres to Order the items present in the Theatres.</li>
                                <li>It was developed by using micro controller and technology used in this is Rf communication.</li>
                                <li>Electronic displays that show the menu and pricing, which can be updated easily.</li>
                                <li>This will calculate the amount in the ordering itself and places order</li>
                            </ul>
                    </div>
                    <div className="skills">
                        <h3>JOURNEY WEB PAGE using HTML and CSS </h3>
                            <ul className="technical">
                                <li>This project shows the local tourist places where the people usually go for trip. Related to Particular area with responsive user Interface.</li>
                                <li>Developed a responsive web page using HTML and CSS, focusing on creating an engaging and user-friendly interface.</li>
                                <li>It was developed based on the real time situation in the day-to-day life. Were many of the people go for tours with misguidance.</li>
                                <li>It shows the places to travel and shows value for the trip and gives a small description about it.</li>
                            </ul>
                    </div>
                    <div className="skills">
                        <h3>WHATSAPP CLONE using HTML and CSS </h3>
                            <ul className="technical">
                                <li>A WhatsApp clone is essentially an application designed to replicate the features and functionalities of WhatsApp, which is a popular messaging platform.</li>
                                <li>A user friendly was developed and many challenges faced by this and gained Knowledge.</li>
                            </ul>
                    </div>
                </div>   
            </div>
        </div>
        <div className="summary"  id="certifications">
            <div className="summary-inner">
                <h2>Certificates:</h2><hr width="100%" color="red" size="100px"></hr>
                    <div className="skills">
                        <ul className="technical">
                            <li>INDUSTRIAL TRAINING on Telecommunications Technologies at BSNL.</li>
                            <li>INTERNSHIP ON Web development at INTERNPE.</li>
                            <li>PCB Workshop on Implementation of Silicon board. </li>
                            <li>IEEE NSPAC'21 A national level Flag-Ship event.</li>
                        </ul>
                    </div>
            </div>
        </div>
        <div className="summary" id="contact">
            <div className="summary-inner">
                <h2>Contact:</h2> <hr width="100%" color="red" size="100px"></hr>
                    <p className="connect"> <a href="mailto:bandisaikunar@gmail.com"> <ion-icon name="mail"></ion-icon> : bandisaikumar9948@gmail.com</a> </p>
                    <p className="connect"> <a href="tel:+919948638817" > <ion-icon name="call"></ion-icon> :9948638817 </a>  </p>
                    <p className="connect"><a href="https://wa.me/+919948638817?text=hello"> <ion-icon name="logo-whatsapp"></ion-icon> : 9948638817 </a> </p>
                    <p className="connect"> <a href="https://www.linkedin.com/in/bandi-sai-kumar/"><ion-icon name="logo-linkedin"></ion-icon> : <u>https://www.linkedin.com/in/bandi-sai-kumar/</u></a></p>
                    <p className="connect"><a href="https://github.com/saikumardeveloper9948"><ion-icon name="logo-github"></ion-icon> : <u>https://github.com/saikumardeveloper9948</u></a></p>
                     {/* <a href="sms:+919948638817?body=hello" ></a>  */}
                   <div className="social">
                   <p className="disconnect"> <a href="mailto:bandisaikunar@gmail.com"> <ion-icon name="mail"></ion-icon> </a> </p>
                    <p className="disconnect"> <a href="tel:+919948638817" > <ion-icon name="call"></ion-icon> </a>  </p>
                    <p className="disconnect"><a href="https://wa.me/+919948638817?text=hello"> <ion-icon name="logo-whatsapp"></ion-icon></a> </p>
                    <p className="disconnect"> <a href="https://www.linkedin.com/in/bandi-sai-kumar/"><ion-icon name="logo-linkedin"></ion-icon> </a></p>
                    <p className="disconnect"><a href="https://github.com/saikumardeveloper9948"><ion-icon name="logo-github"></ion-icon> </a></p>
                    
                   </div>
            </div>
        </div>
        &nbsp;&nbsp;<p style={{textAlign:"center"}}>© 2024 Bandi.Saikumar. All Rights Reserved.</p> &nbsp;&nbsp;
      </>
    );
  }
}
export default Resume;
