/// <reference types='cypress' />

describe("Drag and Drop Test", ()=>{


    it("Drag n Drop", ()=>{


        cy.visit("https://jqueryui.com/droppable/")

        cy.get(".demo-frame").then(function(frame){

            const framebody = frame.contents().find('body')

            cy.wrap(framebody).find("#draggable").as("draggable")

            cy.wrap(framebody).find("#droppable").as("droppable")

        })

        cy.get("@draggable").trigger("dragstart")

        cy.get("@droppable").trigger("drop")

        cy.wait(2000)

        cy.get("@droppable").should("contain.text", "Dropped!")
    })
})