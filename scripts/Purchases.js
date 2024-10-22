import { FoodTruck } from "./FoodTruck.js";
import { Sales } from "./Sales.js";
import { getTransientState, resetTransientState } from "./TransientState.js"


export const handlePurchase = async () => {
    const state = getTransientState()

    if (state.entree && state.vegetable && state.side) {
        // fetch entree, vegetable, and side data
        const entrees = await fetch("http://localhost:8088/entrees").then(res => res.json())
        const vegetables = await fetch("http://localhost:8088/vegetables").then(res => res.json())
        const sides = await fetch("http://localhost:8088/sides").then(res => res.json())

        // find the selected items by their IDs
        const selectedEntree = entrees.find(entree => entree.id === state.entree)
        const selectedVegetable = vegetables.find(vegetable => vegetable.id === state.vegetable)
        const selectedSide = sides.find(side => side.id === state.side)

        // calculate total price
        const totalPrice = selectedEntree.price + selectedVegetable.price + selectedSide.price
        console.log("Total Price:", totalPrice)

        // post the new purchase to the API
        const response = await fetch("http://localhost:8088/purchases", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                totalPrice,
                entreeId: state.entree,
                vegetableId: state.vegetable,
                sideId: state.side
             })
        })

        if (response.ok){
            // reset transient state
            resetTransientState()

            // clear previous receipts
            const salesContainer = document.querySelector(".customerOrders")
            salesContainer.innerHTML = ""

            // re-render the sales
            const salesHTML = await Sales()
            salesContainer.innerHTML = `<h2>Monthly Sales</h2>${salesHTML}`

            // re-render food truck to reset selections
            const mainContainer = document.querySelector("#container")
            mainContainer.innerHTML = await FoodTruck()
        }
    } else {
        alert("Please select an entree, vegetable, and side dish before purchasing.")
    }
}
