export class LoginPage {

    //Declare all web elements

    
    emailField = "input[placeholder='Email']"
    passwordField = "input[placeholder='Password']"
    signInText = "Sign in"



    //Declare all methods
    loginToApplication(email, password){

        cy.contains("a", this.signInText).click()

        cy.get(this.emailField).type(email)

        cy.get(this.passwordField).type(password)

        cy.contains('button', this.signInText).click()

    }

    verifySuccessfulLogin(){
        cy.contains("a", "New Article")
        .should("be.visible")
        .and("have.text", "New Article")
    }
}

export const loginpage = new LoginPage();