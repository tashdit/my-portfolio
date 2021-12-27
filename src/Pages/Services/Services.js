import React from 'react';
import "./Services.css"



const Services = () => {
    return (
        <>
        <section id="services" className="services-mf pt-5 route">
        <div className="container">
            <div className="row">
            <div className="col-sm-12">
                <div className="title-box text-center">
                <h3 className="title-a">
                    Services
                </h3>
                <p className="subtitle-a">
                   The services I offer
                </p>
                <div className="line-mf"></div>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-4">
                <div className="service-box">
                <div className="service-ico">
                    <span className="service-ico-circle"><i className="fas fa-envelope"></i></span>
                </div>
                <div className="service-content">
                    <h2 className="s-title">Web Design</h2>
                    <p className="s-description text-center">
                    I'm still learning. And as a result, I'm getting ideas about design,  And I have mastered the use of Adobe Xd, 
                    Figma. Hopefully I can learn this betters
                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="service-box">
                <div className="service-ico">
                    <span className="service-ico-circle"><i className="fas fa-blog"></i></span>
                </div>
                <div className="service-content">
                    <h2 className="s-title">Web Development</h2>
                    <p className="s-description text-center">
                    I have been doing web development for the last many month. And in this I have done many of projects through which. I have learned a knolage
                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="service-box">
                <div className="service-ico">
                    <span className="service-ico-circle"><i className="fas fa-align-justify"></i></span>
                </div>
                <div className="service-content">
                    <h2 className="s-title">Responsive Design</h2>
                    <p className="s-description text-center">
                    All of the projects I have done are responsive and fit for all types of devices. So I have good experience in this regard
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>  
        </>
    );
};

export default Services;