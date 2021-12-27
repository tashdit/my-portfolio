import React from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => {
    const {picture, _id,title,about} = props.project
    return (
        <>
            <div className="col-md-4">
                <div className="work-box">
                    <div className="work-img">
                    <img src={picture} alt="" style={{height:'200px'}} className="img-fluid"/>
                    </div>
                </div>
                <div className="work-content">
                    <div className="row">
                    <div className="col-sm-8">
                        <h2 className="w-title">{title}</h2>
                        <div className="details">
                            <p>{about}</p>
                        </div>
                        <div className="w-more mb-2 mb-2">
                        <Link to={`/ProjectDetails/${_id}`}><button className="btn btn-primary">Details</button></Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;