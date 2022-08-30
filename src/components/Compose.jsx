import React from "react";




function Compose(){
    return(
        <div className="box">
            <h1 className="text-align-c">Create a post</h1>
                <form action="/create" method="post">
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Title </label>
                        <input placeholder="Write a title for the article" type="text" name="postTitle" className="form-control" id="exampleFormControlInput1"/>
                        <label for="exampleFormControlInput1">Author</label>
                        <input  type="text" name="authorName" className="form-control" id="exampleFormControlInput1"/>
                        <label for="exampleFormControlTextarea1">Post </label>
                        <textarea placeholder="Write your article here" className="form-control" name="postBody" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                        <button className="btn btn-primary">Publish</button>
                </form>
</div>
    );
}

export default Compose;