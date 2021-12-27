import React from 'react';
import Typed from 'typed.js';
import "./Banner.css";


const Banner = () => {


	const el = React.useRef(null);

      const typed = React.useRef(null);
  
    React.useEffect(() => {
      const options = {
          strings: [
          'Designer',
          'Developer',
          'Freelancer',
          'Photographer'
        ],
        // strings: ['npm install^1000\n `installing components...` ^1000\n `Fetching from source...`'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
      };
      

      typed.current = new Typed(el.current, options);
      
      return () => {
        typed.current.destroy();
      }
    }, [])
    return (
        <>
        <div id="hero" className="hero route bg-image">
            <div className="overlay-itro"></div>
            <div className="hero-content display-table">
            <div className="table-cell">
                <div className="container">
                <p className="display-6 color-d">Hello, world!</p>
                <h1 className="hero-title mb-4">I am Mollah Masuk Helal</h1>
                <p className="hero-subtitle"><span style={{ whiteSpace: 'pre' }} ref={el} /></p>
                 <p className="pt-3"><a className="btn btn-primary btn js-scroll px-4"
                  target="_thapa" href="https://drive.google.com/file/d/1kJ2ani2w0i7mokhbaUr6TrbTOGiRynuh/view" role="button">Resume</a></p>
                </div>
            </div>
            </div>
        </div>
        </>
    );
};

export default Banner;