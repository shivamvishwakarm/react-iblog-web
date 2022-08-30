import React from "react";
import SearchForm from "./SearchForm";
import {
   Link
  } from "react-router-dom";


export default function Navbar(props){



    return(
        <nav className="navigation max-width-1 m-auto">
        <div className="nav-left">
            <a style={{color:"black",  textDecoration: "none"}} href="/"><span>iBlog</span></a>
            <ul>
                <li className="hover"><Link  to="/">Home</Link></li>
                <li className="hover"><Link  to="/blogs">Blogs</Link></li>
                <li className="hover"><Link  to="/contact">Contact</Link></li>
                <li className="hover"><Link  to="/create">Upload</Link></li>
                <li className="hover c-yellow border-l-invert"><Link  style={{color: "#ebca67"}} href="/logout" to="/logout">Logout</Link></li>
            </ul>

        </div>
        <SearchForm/>
    </nav>
    )
}
