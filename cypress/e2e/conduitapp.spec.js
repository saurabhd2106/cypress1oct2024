/// <reference types="cypress" />

const { loginpage } = require("../../pages/loginpage")

describe("Conduit App Testing", () => {

    beforeEach(function(){


        cy.fixture("users").then(function(users){

            this.users = users

        })
    })

    it("Login to Conduit App", function() {

        cy.visit("/")

        const email = this.users.validuser

        const password = this.users.validpassword

        loginpage.loginToApplication(email, password)
       
        loginpage.verifySuccessfulLogin()
             
    })

    it("Add Article in the Conduit App", ()=> {
        
    })


})