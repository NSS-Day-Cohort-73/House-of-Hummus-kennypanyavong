const transientState = {
    "entrees": null,
    "vegetables": null,
    "sides": null
}

export const setVegetableChoice = (chosenVegetable) => {
    transientState.vegetables = chosenVegetable
}

export const setSideChoice = (chosenSide) => {
    transientState.sides = chosenSide
}

export const setEntreeChoice = (chosenEntree) => {
    transientState.entrees = chosenEntree
}

export const getTransientState = () => {
    return transientState
}

export const resetTransientState = () => {
    transientState.entrees = null
    transientState.vegetables = null
    transientState.sides = null
}