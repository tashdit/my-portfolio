import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import "./PortfolioDetails.css"

const ProjectDetails = () => {
    const { projectId } = useParams();

    const [service, setService] = useState([])
    const [singleProject, setSingleProject] = useState({})

    useEffect(() => {
        fetch('/PortfolioDetails.json')
            .then(res => res.json())
            .then(data => setService(data.services))
    }, [])

    useEffect(() => {
        const projectName = service.find(services => services._id === projectId)
        setSingleProject(projectName);
    }, [service])
    return (
        <div>

        <div className="hero hero-single route bg-image" >
            <div className="overlay-mf"></div>
            <div className="hero-content display-table">
            <div className="table-cell">
                <div className="container">
                <h2 className="hero-title mb-4">Portfolio Details</h2>
                <ol className="breadcrumb d-flex justify-content-center">
                    <li className="breadcrumb-item">
                    <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Portfolio Details</li>
                </ol>
                </div>
            </div>
            </div>
        </div>

        <section id="portfolio-details" className="portfolio-details">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-8">
            <Carousel>
            <Carousel.Item interval={1000}>
                <img style={{height: '400px'}}
                classNameName="d-block w-100"
                src={singleProject?.picture}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img style={{height: '400px'}}
                classNameName="d-block w-100"
                src={singleProject?.picture2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height: '400px'}}
                classNameName="d-block w-100"
                src={singleProject?.picture3}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
          </div>

          <div className="col-lg-4">
            <div className="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li><strong>Category</strong>: {singleProject?.category}</li>
                <li><strong>Developer</strong>: Mollah Masuk Helal</li>
                <li><strong>Project date</strong>: 01 Nov, 2021</li>
                <li><strong>Project URL</strong>: <a href={singleProject?.link}  target="_thapa">{singleProject?.link}</a></li>
                <li><strong>Github Client</strong>: <a href={singleProject?.githubClient}  target="_thapa">{singleProject?.githubClient}</a></li>
                <li><strong>Github Server</strong>: <a href={singleProject?.githubServer}  target="_thapa">{singleProject?.githubServer}</a></li>
              </ul>
            </div>
            <div className="portfolio-description">
              <h2>This is an example of portfolio detail</h2>
              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
              </p>
            </div>
          </div>

        </div>
  

      </div>
    </section>
    <Footer></Footer>
    </div>
    );
};

export default ProjectDetails;