import { setEntreeChoice } from "./TransientState.js"

const handleEntreeChoice = (changeEvent) => {
    if (changeEvent.target.name === "Base Dish") {
        setEntreeChoice(parseInt(changeEvent.target.value))
}
}

export const Entrees = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    const divStringArray = entrees.map(
        (entree) => {
            return `<div>
                <input type="radio" name="Base Dish" value="${entree.id}"/>${entree.name}
            </div>
        `
        }
    )

    document.addEventListener("change", handleEntreeChoice)

    const entreeOptionsHTML = divStringArray.join("")

    return entreeOptionsHTML
}