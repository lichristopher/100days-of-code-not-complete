const button = document.querySelector('#searchButton');
const search = document.querySelector('#search-input');
const movieItemContainer = document.querySelector('#movie-items-container');

button.addEventListener('click', function () {
    if (search.value.length > 0) {
        searchMovie();
    }
});

search.addEventListener('keypress', function (e) {
    if (search.value.length > 0 && e.keyCode === 13) {
        searchMovie();
    }
});




function searchMovie() {

    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=1487b0c4&s=`;
    const searchString = search.value;
    const queryString = url + searchString;
    const html =

        fetch(queryString)
        .then(res => res.json().then(data => data.Search))
        .then(parsedData => {
            let html = '';
            parsedData.forEach(movie => {
                if (movie.Poster === "N/A") {
                    movie.Poster = 'https://bulma.io/images/placeholders/1280x960.png';
                }
                html += `<div class="column is-3-tablet is-12-mobile">
                <div class="card">
                <div class="card-image">
                    <figure class="image is-3by4">
                    <img src="${movie.Poster}"
                        alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                    <h2 class="has-text-centered">${movie.Title}</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, minima?</p>
                    </div>
                </div>
                </div>
            </div>`
            })

            movieItemContainer.innerHTML = html;
            console.log(parsedData)
        });
}