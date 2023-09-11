const fruitForm = document.querySelector("#inputSection form")
const fruitList = document.querySelector("#fruitSection ul")

const addFruit = fruit => {
    const li = document.createElement("li")
    li.textContent = fruit
    fruitList.appendChild(li)
}

const delFruit = () => {
    document.querySelector("li:hover").remove()
}



fruitForm.addEventListener("submit", e => {
    e.preventDefault();

    addFruit(e.target.fruitInput.value)
    e.target.fruitInput.value = ""

})

//on click, remove fruit and event listeners associated with it

fruitList.addEventListener("mousedown", e => {

    //call deletefruit func here
    delFruit();
})




