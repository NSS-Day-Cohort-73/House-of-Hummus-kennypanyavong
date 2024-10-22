export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases").then(res => res.json())

    let salesDivs = sales.map((purchase, index) => {
        // get the total price of purchase, default to 0 if not available
        const totalCost = purchase.totalPrice || 0
        
        // change value to fit $00.00 format 
        const formattedCost = totalCost.toFixed(2)
        
        // return a string with receipt # and total cost
        return `<div>Receipt #${index + 1} = $${formattedCost}</div>`
    })

    salesDivs = salesDivs.join("")
    return salesDivs
}
