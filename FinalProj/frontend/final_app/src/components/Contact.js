import React, {useState} from 'react';

function Contact(){

    var [ name , setName ] = useState()

  const nameUpdate=(event)=>{ // Dealing with name field changes to update our state
    setName(event.target.value)
    }

    const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
        const postURL = "http://localhost:4000/finalproject/users_logo" //Our previously set up route in the backend
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                name: name,
                clockedIn:false,
                dates:[]
            })
        })
        .then(()=>{
            // Once posted, the user will be notified 
            alert('You have been added to the system!');
        })
    }

    return(
        <div>
            <body>
   
            <main>

            <section class="py-5 text-center container" style={{"margin-bottom":"-7rem"}}>
                <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-dark">Thank you for choosing Yard Logo!</h1>
                    <p style={{"font-size":"x-large"}}>Please contact Keegan to continue the Yard Logo experience</p>
                    
                    <form onSubmit={handleSubmit}>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4" class="input-title">Name</label>
                            <input type="text" class="form-control" id="inputName" placeholder="Name" required onChange={nameUpdate}></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputEmail4" class="input-title">Email</label>
                            <input type="email" class="form-control" id="inputEmail" placeholder="Email"></input>
                        </div>
                        <div class="form-group">
                        <label for="inputAddress">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
                        </div>
                        <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" id="inputCity"></input>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState">State</label>
                            <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option>Minnesota</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputZip">Zip</label>
                            <input type="text" class="form-control" id="inputZip"></input>
                        </div>
                        </div>
                        <button type="submit" class="btn btn-primary" style={{"margin":"1em"}}>Submit Info</button>
                    </div>
                    </form>
                    
                    <p class="lead text-muted">
                    Reach out via phone or email and leave the following information: name, phone number or email (whichever you prefer), 
                    your design idea (college logo, word, etc), and any time considerations you may have.
                    </p>
                    <h5>Keegan's Email: </h5> <a id = "Keegan-email" href="keegan.masser@gmail.com">keegan.masser@gmail.com</a>
                    <h5>Keegan's Phone Number: </h5> <a id = "Keegan-number" href="">(612)-401-0117</a>
                    <p>
                    <a href="./gallery" class="btn btn-primary my-2">View Previous Designs</a>
                    <a href="./" class="btn btn-secondary my-2">Home</a>
                    <a href="./reviews" class="btn btn-primary my-2">Check Out Reviews</a>
                    </p>
                </div>
                </div>
            </section>
            </main>

        </body>
        </div>
    )
}

export default Contact;