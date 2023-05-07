import React from 'react';
import { useNavigate } from "react-router-dom";

function Homepage(){

    return(
        <div>
            <body>

            <main>

            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="bd-placeholder-img" src="./images/Iowa St 6_24.jpeg" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    
                    <div className="container">
                    <div className="carousel-caption">
                        <h1>Yard Logo</h1>
                        <p>Start your custom order now</p>
                        <p><a className="btn btn-lg btn-primary" href="./contact">Order Now</a></p>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="bd-placeholder-img" src="./images/Iowa 6_1.jpeg" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    <div className="container">
                    <div className="carousel-caption">
                        <h1>Make It Yours</h1>
                        <p></p>
                        <p><a className="btn btn-lg btn-primary" href="./about">Learn more</a></p>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="bd-placeholder-img" src="./images/Wisconsin 6_21.jpeg" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    <div className="container">
                    <div className="carousel-caption">
                        <h1>What Can you Create?</h1>
                        <p></p>
                        <p><a className="btn btn-lg btn-primary" href="./gallery">Browse gallery</a></p>
                    </div>
                    </div>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev" value={"Previous"}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next" value={"Next"}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden"></span>
                </button>
            </div>
            
                <div className="container marketing">
            
                <div className="row">
                    <div className="col-lg-4">
                    <img className ="rounded-circle" src="./images/thumbnail_93614540BEAD4673B6F3A3194218AD6C.jpeg" alt="St. Thomas" width="140" height="140"></img>
                    <h2 className="fw-normal">The Talk of The Town</h2>
                    <p style={{"color": "black"}}>Your Yard Logo will be the highlight of any graduation party, birthday, or other outdoor event. See what people are saying.</p>
                    <p><a className="btn btn-primary" href="./reviews">Read Reviews &raquo;</a></p>
                    </div>
                    <div className="col-lg-4">
                    <img className ="rounded-circle" src="./images/thumbnail_D4D97E1C79F14C2E89DE71DAD73C9D4B.jpeg" alt="St. Thomas" width="140" height="140"></img>
                    <h2 className="fw-normal">Dream Big</h2>
                    <p style={{"color": "black"}}>You dream it, we paint it. It's that simple. Take a look!<br></br></p>
                    <p><a className="btn btn-primary" href="./gallery">View Gallery &raquo;</a></p>
                    </div>
                    <div className="col-lg-4">
                        <img className ="rounded-circle" src="./images/St. Thomas 6_22.jpeg" alt="St. Thomas" width="140" height="140"></img>
                    <h2 className="fw-normal">Completely Customizable</h2>
                    <p style={{"color": "black"}}>Our hand-drawn stensils and detailed designs speak for themselves. Learn about our process!</p>
                    <p><a className="btn btn-primary" href="./about">Learn About Us &raquo;</a></p>
                    </div>
                    
                </div>
            
            
                <hr className="featurette-divider" />
            
                <div className="row featurette">
                    <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">Create Memories<br></br><span className="text-muted">Or show off your future plans?</span></h2>
                    <p className="lead">Show your friends and family what you plan to do after high school with a custom Yard Logo. </p>
                    </div>
                    <div className="col-md-5">
                    <img src="./images/Springfield 6_17.jpeg" width="400" height="400" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    </div>
                </div>
            
                <hr className="featurette-divider" />
            
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                    
                    <h2 className="featurette-heading fw-normal lh-1">Lawn-Safe<br></br><span className="text-muted">Will not cause harm to your lawn</span></h2>
                    <p className="lead">Our logos are created with a high quality paint guranteed to not damage your lawn.</p>

                    </div>
                    <div className="col-md-5 order-md-1">
                    <img src="./images/St. Thomas 6_22.jpeg" width="400" height="400"></img>
                    </div>
                </div>
            
                <hr className="featurette-divider" />
            
                <div className="row featurette">
                    <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1" style={{"textAlign":"center"}}>Don't Miss Out! <span className="text-muted"></span></h2>
                    <p className="lead" style={{"textAlign": "center"}}>Due to popular demand, our schedule fills up very quickly. <br></br>Start your order and schedule your painting day now!</p>
                    <p><a className="btn btn-primary" href="./contact" style={{"position": "relative", "margin": "auto", "left": "45%"}}>Order Now</a></p>
                    </div>
                    <div className="col-md-5">
                    <img src="./images/UND 6_15.jpeg" width="400" height="400"></img>
                    </div>
                </div>
            
                <hr className="featurette-divider" />
                      
                </div>
            </main>
            
            </body>
        </div>
    )
}

export default Homepage;