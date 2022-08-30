import React from "react";
import BlogCard from "./BlogCard";



export default function Header(){

    return (
    <div>

        <div className="content max-width-1 m-auto my-2">
            <div className="content-left">
                <h1>The heaven for bloggers</h1>
                <p>iBlog is a website which lets you submit an article which upon approval will be up on our website and you can get a good amount of reach in here Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, itaque. Itaque necessitatibus,
                    quae velit illum animi recusandae tenetur provident accusantium sunt ea odit dolor ex similique ut aperiam, architecto at deleniti, in ratione aut? </p>
            </div>
            <div className="content-right">
                <img src="img/typewriter 2.svg" alt="iBlog"/>
            </div>
        </div>

        <div className="max-width-1 m-auto">
            <hr/>
        </div>

        <h2 className="text-align-c">Features Articles</h2>

        <BlogCard/>

    </div>

    )




}