import React from "react";


function Login(){
    return (
        <div className="container mt-5">
            <h1>Sign up</h1>

                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <a className="btn btn-block" href="/auth/google" role="button">
                                <i className="fab fa-google"></i> Sign In with Google
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <a className="btn btn-block" href="/auth/facebook" role="button">
                                <i className="fab fa-facebook"></i> Sign In with facebook
                            </a>
                        </div>
                    </div>
                </div>

        </div>
       
    );
}
export default Login