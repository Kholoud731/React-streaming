import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";


const Header = () => {
    return ( 
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Streamer</Link>
            <div className="right menu">
                <Link to="/" className="item" >All Streams</Link>
                <GoogleAuth/>
            </div>
        </div>
     );
}
 
export default Header;

// client id: 854282882172-np82ojnhekl4a7m8v14cfgu9fnfvco7u.apps.googleusercontent.com