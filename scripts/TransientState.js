let transientState = {
    "entree": "",
    "vegetable": "",
    "side": ""
}

export const setVegetableChoice = (chosenVegetable) => {
    transientState.vegetable = chosenVegetable
    console.log("Vegetable selected:", transientState.vegetable)
}

export const setSideChoice = (chosenSide) => {
    transientState.side = chosenSide
    console.log("Side selected:", transientState.side)
}

export const setEntreeChoice = (chosenEntree) => {
    transientState.entree = chosenEntree
    console.log("Entree selected:", transientState.entree)
}

export const getTransientState = () => {
    return transientState
}

export const resetTransientState = () => {
    transientState.entree = null
    transientState.vegetable = null
    transientState.side = null
}


