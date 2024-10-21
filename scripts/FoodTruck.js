import { Entrees } from "./Entrees.js"
import { Sales } from "./Sales.js"
import { Sides } from "./SideDishes.js"
import { Veggies } from "./Vegetables.js"

export const FoodTruck = async () => {
    const entreesHTML = await Entrees()
    const veggiesHTML = await Veggies ()
    const sidesHTML = await Sides ()
    const salesHTML = await Sales()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article>
            <div>
                <h2>Base Dish</h2>
                ${entreesHTML}
            </div>
            <div>
                <h2>Vegetable</h2>
                ${veggiesHTML}
            </div>
            <div>
                <h2>Sides</h2>
                ${sidesHTML}
            </div>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
