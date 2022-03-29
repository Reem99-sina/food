let recipeList = [];
let navList = document.querySelectorAll(".nav-link")
navList.forEach(element => {
    element.addEventListener("click", (e) => {
        let type = e.target.getAttribute("data-food");
        getRecipe(type)
    })
})

function getRecipe(recipeType = "pizza") {
    let myHttp = new XMLHttpRequest();
    myHttp.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${recipeType}`);
    myHttp.send();
    myHttp.addEventListener("readystatechange", () => {
        if (myHttp.readyState == 4 && myHttp.status == 200) {
            recipeList = JSON.parse(myHttp.response).recipes;
            display();
        }
    })
}
getRecipe()

function display() {
    var temp = "";
    recipeList.forEach(element => {
        temp += `<div class="col-md-3">
        <div class="item">
            <img src="${element.image_url}" alt="">
            <h5>${element.title}</h5>
        </div>
    </div>`
    })
    document.getElementById("rowData").innerHTML = temp
}