/// <reference types='cypress' />

describe ("Verify search Product test cases", function() {

    beforeEach(()=>{
        cy.visit("https://amazon.in")
    })

    it("Verify Search Product Test", function() {
      
        //Search Product
        cy.get("#searchDropdownBox").scrollIntoView().select("Electronics", {force: true})

        cy.get("#twotabsearchtextbox").type("Apple Watch")

        cy.get("#nav-search-submit-button").click()

        cy.get("div[data-component-type='s-search-result']").as('allProductItems')

        //Assertion to verify the number of products in the product list
        cy.get("@allProductItems").should("have.length", 27)

        //Getting nth product
        cy.get("@allProductItems").eq(5).invoke('text').then(productDetails => {
            expect(productDetails).to.contain("Apple Watch")
        })

        cy.get("@allProductItems").eq(5).invoke('text').then(productDetails => {
            cy.log(productDetails)
        })

        //Get all products from the list
        cy.get("@allProductItems").each(($el, index, $list) => {

            cy.wrap($el).scrollIntoView()

            cy.wait(500)
            
            cy.log("Index : " + index + " and the product details are - "+ $el.text())

        })

        // Select the Nth product
        cy.get("@allProductItems").eq(5).click()


    })

    

    

})