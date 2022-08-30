import React from "react";




export default function BlogCard(){

    return(
        <div className="home-articles max-width-1 m-auto  font2">
        <div className="home-article">
            <div className="home-article-img">
                <img src="img/4.jpg" alt="article"/>
            </div>
            <div className="home-article-content font1">
                <a href='/posts/<%=post._id%>'>
            <h3> "post.title" </h3>
                </a>

                <span> " Post Author " </span>
                <div className="max-width-1 m-auto">
                    <hr/>
                </div>
                <span>15 November | 5 min read</span>
            </div>

        </div>
    </div>
    )


}