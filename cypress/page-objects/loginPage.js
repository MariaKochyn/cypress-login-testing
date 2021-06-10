
export default class Login {

    logo(){
        return cy.get('.login_logo')
    }

    usernameInput(){
        return cy.get('#user-name')
    }

    passwordInput(){
        return cy.get('#password')
    }

    loginBtn(){
        return cy.get('#login-button')
    }

    botImage(){
        return cy.get('.bot_column')
    }

    errorMessage(){
        return cy.xpath(`//h3[contains(text(),'Epic sadface: Username and password do not match a')]`)
    }
    
    usernameAndPasswordErrors(text){
        return cy.xpath(`//h3[normalize-space()='${text}']`)
    }

    closeErrorBtn(){
        return cy.get('.svg-inline--fa fa-times fa-w-11 ')
    }

    cartBtn(){
        return cy.get('.shopping_cart_link')
    }
}
