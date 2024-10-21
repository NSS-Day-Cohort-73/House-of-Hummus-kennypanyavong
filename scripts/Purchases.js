import { getTransientState, resetTransientState } from "./TransientState.js"

document.addEventListener("click", (event) => {
    if (event.target.id === "purchase") {
        handlePurchase()
    }
});

const handlePurchase = async () => {
    const state = getTransientState()

    if (state.entrees && state.vegetables && state.sides) {
        // Fetch entree, vegetable, and side data
        const entrees = await fetch("http://localhost:8088/entrees").then(res => res.json())
        const vegetables = await fetch("http://localhost:8088/vegetables").then(res => res.json())
        const sides = await fetch("http://localhost:8088/sides").then(res => res.json())

        // Find the selected items by their IDs
        const selectedEntree = entrees.find(entree => entree.id === state.entrees)
        const selectedVegetable = vegetables.find(vegetable => vegetable.id === state.vegetables)
        const selectedSide = sides.find(side => side.id === state.sides)

        // Calculate total price
        const totalPrice = selectedEntree.price + selectedVegetable.price + selectedSide.price

        // Post the new purchase to the API
        await fetch("http://localhost:8088/purchases", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ totalPrice })
        });

        // Reset transient state
        resetTransientState()

        // Re-render the sales
        const salesHTML = await Sales()
        document.querySelector(".customerOrders").innerHTML = `<h2>Monthly Sales</h2>${salesHTML}`
    } else {
        alert("Please select an entree, vegetable, and side dish before purchasing.")
    }
}
