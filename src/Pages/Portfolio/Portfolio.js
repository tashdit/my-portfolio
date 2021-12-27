import React, { useEffect, useState } from 'react';
import './Portfolio.css'
import Project from './Project/Project';

const Portfolio = () => {

    const [projects, setProjects] = useState([])


    useEffect(()=>{
        fetch('./Portfolio.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])


    return (
        <>
        <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
            <div className="row">
            <div className="col-sm-12">
                <div className="title-box text-center">
                <h3 className="title-a">
                    Portfolio
                </h3>
                <p className="subtitle-a">
                   My Some Projects
                </p>
                <div className="line-mf"></div>
                </div>
            </div>
            </div>
             <div className="row">
                {projects.map(project => <Project key={project._id} project={project}></Project>)}
             </div>
        </div>
        </section>  
        </>
    );
};

export default Portfolio;