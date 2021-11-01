// const supermarket = require('../src/supermarket.js')

describe("Total Cost", () => {
    it("returns total cost of basket if there are items", () => {
    // setup
        const basket = ["banana", "eggs"];
        
    // execute
        const result = totalCost.addAllItemPrices(basket, "item")
        
    // verify
        expect(result).toEqual(true)    
    })

    it("returns empty basket string if no items are in basket", () => {
    // setup    
        const basket = []

    // execute
        const result = totalCost.addAllItemPrices(basket, "item")
    
    //verify
        expect(result).toEqual(false)
    })
})

