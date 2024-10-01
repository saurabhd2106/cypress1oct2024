/// <reference types='cypress' />

describe("Multiple Tabs", ()=>{


    it("Multi tab test", ()=>{


        cy.visit("https://playwright.dev/")

        cy.get('img[alt="VS Code"]').parent("a").should("have.attr", "href").and("equal", "https://code.visualstudio.com");


        cy.get('img[alt="VS Code"]').parent("a").should("have.attr", "target").and("equal", "_blank")

    //    cy.get('img[alt="VS Code"]').parent("a").invoke("removeAttr", "target").click()
        
       
    })
})