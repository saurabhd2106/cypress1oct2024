/// <reference types='cypress' />

import { articlepage } from "../../pages/articlepage"
import { loginapi } from "../../pages/loginapi"
import { loginpage } from "../../pages/loginpage"

describe("Intercept calls", () => {

    it("Intercept Get Api call", () => {

        cy.intercept({
            method: 'GET',
            url: "**/api/tags"
        },
            {
                fixture: "tagresponse.json"
            }).as("tagsApi")

        cy.visit("/")

        cy.wait("@tagsApi")

        cy.get("@tagsApi").then(function(xhr) {

            expect(xhr.response.body.tags).to.contain("selenium")

        })

        cy.get(".tag-list > a").should("contain.text", "selenium").and("contain.text", "cypress")


    })

    it("Error Code 500", () => {

        cy.intercept({
            method: 'GET',
            url: "**/api/tags"
        },
            {
                statusCode: 500

            }).as("tagsApi")

        cy.visit("/")

        cy.wait("@tagsApi")

        cy.get("@tagsApi").then(function(xhr) {

            expect(xhr.response.statusCode).to.equal(500)

        }) 


    })

    

    it("Add Article", () => {

        cy.login("testuser@test.com", "testpassword")

        cy.visit("/")

        cy.contains("a", "New Article").should("be.visible")
       


    })


    it.only("Modify the request", () => {

        cy.intercept({
            method: 'POST',
            url: "**/api/articles"
        }, 
        function(req){
            req.body.article.tagList = ["selenium", "playwright" ,"cypress"] 
        }
    ).as("articleApi")

    cy.visit("/")

    loginpage.loginToApplication("testuser@test.com", "testpassword")

    articlepage.addArticle("test article", "test data", "test description", "test")

    cy.wait("@articleApi").then(function(xhr){

        expect(xhr.response.body.article.tagList).to.contain("selenium", "cypress", "playwright")

    })


    })
})