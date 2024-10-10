import { setVegetableChoice } from "./TransientState.js"

const handleVegetableChoice = (changeEvent) => {
    if (changeEvent.target.name === "vegetable") {
        setVegetableChoice(parseInt(changeEvent.target.value))
    }
    return null
}

export const Veggies = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()

    const divStringArray = vegetables.map(
        (vegetable) => {
            return `<div>
                <input type="radio" name="vegetable" value="${vegetable.type}"/> ${vegetable.type}
            </div>
        `
        }
    )

    document.addEventListener("change", handleVegetableChoice)

    const vegetableOptionsHTML = divStringArray.join("")

    return vegetableOptionsHTML
}
