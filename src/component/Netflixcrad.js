import React from "react";
import "./Netflixcrad.css";
// import ReactDOM from 'react-dom/client';

const Netflixcrad = (props) => {
  console.log(props);
  return (
    <div className="Netflixcrad">
      <div>
        <div className="netflixcard">
          <img src={props.image} alt="NetFlex-image" className="" />
          {/* <img src="https://www.scrolldroll.com/wp-content/uploads/2022/08/stranger-things-best-web-series-2022-819x1024.jpg" alt="NetFlex-image" className=""/> */}
          <div className="card-content">
            <h2 className="netflixheading">{props.heading}</h2>
            <p>{props.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Netflixcrad;
