const fruitForm = document.querySelector("#inputSection form")

const fruitList = document.querySelector("#fruitSection ul")

const fruitNutrition = document.querySelector("#nutritionSection p")

const fetchFruitData = fruit => {
    fetch(`https://fruity-api.onrender.com/api/fruits/${fruit}`)
        .then(resp => resp.json())
        .then(data => addFruit(data))
        .catch(e => console.error(e))

}

let totalCal = 0
let totalCarbs = 0
let totalProtein = 0
let totalSugar = 0
let totalFat = 0;


const addFruit = fruit => {
    const li = document.createElement("li")
    li.textContent = fruit.name
    fruitList.appendChild(li)

calcNutrition(fruit, '+')

    

}

const calcNutrition = (fruit, operator) => {

    if (operator == '+') {
        totalCal += fruit.nutritions.calories
        totalCarbs += fruit.nutritions.carbohydrates
        totalProtein += fruit.nutritions.protein
        totalSugar += fruit.nutritions.sugar
        totalFat += fruit.nutritions.fat
    }
    else {
        totalCal -= fruit.nutritions.calories
        totalCarbs -= fruit.nutritions.carbohydrates
        totalProtein -= fruit.nutritions.protein
        totalSugar -= fruit.nutritions.sugar
        totalFat -= fruit.nutritions.fat
    }


    fruitNutrition.textContent = `Calories: ${totalCal}\nProtein: ${totalProtein}\nCarbohydrates: ${totalCarbs}\nSugar: ${totalSugar}\nFat: ${totalFat}\n`

}



const delFruit = () => {
    calcNutrition("li:hover", '-')
    document.querySelector("li:hover").remove()
    
}



fruitForm.addEventListener("submit", e => {
    e.preventDefault();

    fetchFruitData(e.target.fruitInput.value)
    e.target.fruitInput.value = ""
})

//on click, remove fruit and event listeners associated with it

fruitList.addEventListener("mousedown", e => {
    //call deletefruit func here
    delFruit();
})




