import React from 'react';
import "./About.css"
import profile from "../../images/profile.jpg"

const About = () => {
    return (
        <>

        <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
            <div className="row">
            <div className="col-sm-12">
                <div className="box-shadow-full">
                <div className="row">
                    <div className="col-md-6">
                    <div className="row">
                        <div className="col-sm-6 col-md-5">
                        <div className="about-img">
                            <img src={profile} className="img-fluid rounded b-shadow-a" alt=""/>
                        </div>
                        </div>
                        <div className="col-sm-6 col-md-7">
                        <div className="about-info">
                            <p><span className="title-s">Name: </span> <span>Mollah Masuk Helal</span></p>
                            <p><span className="title-s">Profile: </span> <span>full stack developer</span></p>
                            <p><span className="title-s">Email: </span> <span>mollahmasukhelal@gmail.com</span></p>
                            <p><span className="title-s">Phone: </span> <span>+088 01962480397</span></p>
                        </div>
                        </div>
                    </div>
                    <div className="skill-mf">
                        <p className="title-s">Skill</p>
                        <span>HTML</span> <span className="pull-right">85%</span>
                        <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <span>CSS3</span> <span className="pull-right">75%</span>
                        <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <span>React js</span> <span className="pull-right">50%</span>
                        <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <span>JAVASCRIPT</span> <span className="pull-right">90%</span>
                        <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                        <div className="title-box-2">
                        <h5 className="title-left">
                            About me
                        </h5>
                        </div>
                        <p className="lead">
                        I am Mollah Masuk Helal. I have been doing web development for the last many month. 
                        And in this I have done many of projects through which. I have learned a knolage
                        </p>
                        <p className="lead">
                        I want to work in a place where I can apply my creativity
                        </p>
                        <p className="lead">
                          Thank You 
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        </>
    );
};

export default About;