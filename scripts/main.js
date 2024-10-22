import { FoodTruck } from "./FoodTruck.js"
import { handlePurchase } from "./Purchases.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()
}

renderAllHTML()

document.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        handlePurchase()
    }
})

