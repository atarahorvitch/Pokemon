const URL_SPECIES = "https://pokeapi.co/api/v2/pokemon-shape/"

function updateProgressBar() {
    var progressBar = document.getElementById("progress-bar");
    progressBar.innerHTML.style = stringify(33);
    progressBar.innerHTML = (arie - valuenow("33"));
}



function fetchThis(api) {
    fetch(api)
        .then(res => res.json())
        .then(jres => {
            console.log(jres.results);
            const arr = jres.results;
            addtoHTML(arr);

        })
    return arr
}



function displayThisButton(btnName, id) {
    document.getElementById("buttons").innerHTML +=
        `<button type="button" id=${id} class="btn btn-info">${btnName}</button>`
        ;
}

function addtoHTML(array) {
    var i = 1;
    array.forEach(element => {
        displayThisButton(element.name, i);
        i++
        //console.log("does this work?")
    });
}

const $buttons = document.getElementById("buttons");
$buttons.addEventListener('click', stickIDtoButton);

function stickIDtoButton(e) {
    let clicked = e.target.id;
    console.log(clicked);
    let link = (`${URL_SPECIES}${clicked}/`);
    console.log(link);
    fetchThis(link);
}

//begin
fetchThis('https://pokeapi.co/api/v2/pokemon-shape');