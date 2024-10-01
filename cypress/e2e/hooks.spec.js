/// <reference types='cypress' />

describe("Hooks examples", ()=>{

    before(()=>{

        cy.log("Executes as the first method")

    })

    after(()=>{

        cy.log("Executes as the last method")
        
    })

    beforeEach(()=>{
        cy.log("Executes before every test method")
    })

    afterEach(()=>{
        cy.log("Executes after every test method")
    })

    it("tC1", ()=>{
        cy.visit("https://amazon.com")
    })
})