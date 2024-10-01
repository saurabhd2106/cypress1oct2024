// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { loginapi } from "../../pages/loginapi";

Cypress.Commands.add('login', function(useremail, userpassword){
    let res;

        loginapi.loginToApplication(useremail, userpassword)
            .then(function (response) {
                res = response
                

            })

        cy.visit("/", {

            onBeforeLoad(win) {
                win.localStorage.setItem("user", JSON.stringify(res))
            }

            
        })

})