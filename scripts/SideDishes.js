import { setSideChoice } from "./TransientState.js"

const handleSideChoice = (changeEvent) => {
    if (changeEvent.target.name === "sides") {
        setSideChoice(parseInt(changeEvent.target.value))
    }
    return null
}

export const Sides = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    const divStringArray = sides.map(
        (side) => {
            return `<div
                <input type="radio" name="sides" value="${side.id}"/> ${side.title}
            </div>
        `      
        }
    )

    document.addEventListener("change", handleSideChoice)

    const sideOptionsHTML = divStringArray.join("")

    return sideOptionsHTML
}

