// fetch("test.json")
// .then(response => response.json())
// .then(data => dataToHTML(data));

// function dataToHTML(data){
//     let mainContainer = document.getElementById("tb1");
//     for (let i = 0; i < data.movies.length; i++) {
//     let firstName = data.movies[i].firstName;
//     let lastName = data.movies[i].lastName;
//     let job = data.movies[i].job;
//     let mytr = document.createElement("tr");
//     mytr.innerHTML = `
//     <tr>
//     <td>${title} ${url}</td>
//     <td>${job}</td>
//     </tr> `;
//     mainContainer.appendChild(mytr);
//     }
//     }
function getInputValue() {
  fetch("test.json")
  .then(response => response.json())
  .then(myMovies => loadMovies(myMovies));
  let movieName = document.forms["my_form"]["inputMovieName"]["inputMovieUrl"];
  let inputMovieName = movieName.value;
  let inputMovieUrl = movieName.value;
  function loadMovies(myMovies) {
  var mainContainer = document.getElementById("goodmovies");
 
