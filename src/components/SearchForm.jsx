import React from "react";



// eslint-disable-next-line import/no-anonymous-default-export
export default function (){



    return(
        <div className="nav-right">
            <form action="/search" method="get">
                <input className="form-input" type="text" name="query" placeholder="Search the article"/>
                <button className="btn">Search</button>
            </form>

        </div>
    )
}