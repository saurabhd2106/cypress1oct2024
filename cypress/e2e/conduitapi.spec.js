/// <reference types="cypress" />

const { loginapi } = require("../../pages/loginapi")
const { loginpage } = require("../../pages/loginpage")

describe("Conduit App Testing", () => {



    it("Get Tags API", () => {

        cy.request({
            method: 'GET',

            url: '/api/tags'
        }).then((response) => {

            expect(response.status).to.equal(200)

            expect(response.body.tags).to.contain("sunt")

        })

    })

    it("Login to application with API", () => {



        loginapi.loginToApplication("testuser@test.com", "testpassword").then((response) => {


            expect(response.status).to.equal(200)


        })


    })



})