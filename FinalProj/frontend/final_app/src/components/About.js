import React from 'react';

function About(){
    return(
        <div>
            {/* <h2>testest</h2>
            <footer className="container">
                <p className="float-end"><a href="#">Back to top</a></p>
                <p style={{"color":"blue"}}>Yard Logo Inc. 2020-2023 <br></br></p>
            </footer> */}
            <body>

            <main>

                <div class="album py-5 bg-light" style={{"marginTop": "5%"}}>
                <div class="container" style={{"marginBottom": "-7rem"}}>
                    <h1 class="centered border">About Us</h1>
                    <h4 class="centered">Meet the CEO: Keegan Masser</h4>
                    <img src="./images/keegan_headshot.jpg" alt="Keegan_Headshot" class="main_img centered"></img>
                    <p class="centered">
                    Keegan is currently a student in the Carlson School of Management at the Univeristy of Minnesota <br></br>
                    Keegan currently designs and paints all Yard Logos by himself, but is looking to expand in the near future.
                    </p>
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
                    <h2>How Did Yard Logo Start?</h2>
                    <h2 style={{"textAlign":"end"}}>How Does A Logo Get Made?</h2>
                    <p> 
                    "Yard Logo began like most other companies, as an idea in a garage. 
                    I came up with the idea for Yard Logo while watching football games and seeing the large logo at midfield. 
                    Being early on in high school, I did not act on this idea until a few years later, when I began stenciling out logos on large pieces of cardboard." -Keegan
                    </p>
                    
                    <p style={{"textAlign":"end"}}>
                    "The first step is to design a stencil using cardboard. Luckily, I have saved previously done logos, which makes the process much simpler.
                    Then, once the stencil is done, I use it to create an outline. I can then fill the tape outline in with paint. 
                    After a few hours of drying and a couple more coats of paint, your logo is good to go!" -Keegan
                    </p>
                    
                    </div>

                    <h1 class="centered" style={{"margin":"auto"}}>Website Creators</h1>
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
                    <div class="col centered">
                        <img class="headshots" src="./images/2p2pwqck.png" height="300" width="320"alt="Nick Headshot"></img>
                        <div class="card-body">
                            <h4 class="card-text">Nick Pinnello</h4>
                            <p>Email: npin@iastate.edu</p>
                            <p>SE/Com S 319 Construction of User Interfaes, Spring 2023 <br></br>
                            Date: 3/10/23 <br></br>
                            </p>
                            <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group"style={{"position":"absolute"}}>
                                <button type="button" class="btn btn-sm btn-outline-secondary center_button"><a href="https://github.com/npinnello">Github</a></button>
                                <button type="button" class="btn btn-sm btn-outline-secondary center_button"><a href="https://www.linkedin.com/in/nicholas-pinnello-b5a052213/">Linkedin</a></button>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col centered">
                        <img class="headshots" src="./images/125076483.jpg" height="300" width="300" alt="Alex Headshot"></img>
                        <div class="card-body">
                            <h4 class="card-text">Alex Moeller</h4>
                            <p>Email: alexmoe@iastate.edu</p>
                            <p>SE/Com S 319 Construction of User Interfaes, Spring 2023 <br></br>
                            Date: 3/10/23 <br></br>
                            </p>
                            <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" style={{"position":"sticky"}} class="btn btn-sm btn-outline-secondary center_button" ><a href="https://github.com/Alex-Moeller7">Github</a></button>
                                <button type="button" class="btn btn-sm btn-outline-secondary center_button"><a href="https://www.linkedin.com/in/alex-moeller-53b0b7250/">Linkedin</a></button>
                            </div> 
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            
            </main>   
            </body>
        </div>
    )
}

export default About;