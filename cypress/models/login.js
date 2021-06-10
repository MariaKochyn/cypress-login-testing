import { should } from 'chai';
import Login from '../page-objects/loginPage';
const lgn = new Login();
let envVariables = Cypress.env();

export const emailField = (value) => lgn.usernameInput().should('be.visible').clear().type(value),
    passwordField = (value) => lgn.passwordInput().should('be.visible').clear().type(value),
    loginBtn = () => lgn.loginBtn().should('be.enabled').click(),
    verifyErrorText = (text) => lgn.errorMessage().should('be.visible').and('have.text', text),
    errors = (text) => lgn.usernameAndPasswordErrors(text).should('be.visible');

export function ex() {
    cy.visit(envVariables.dev.url);
}

export function elements(){
    lgn.logo().should('be.visible')
    lgn.botImage().should('be.visible')
    lgn.usernameInput().should('be.visible')
    lgn.passwordInput().should('be.visible')
    lgn.loginBtn().should('be.enabled')
    lgn.usernameInput().invoke('attr', 'placeholder').should('contain', 'Username')
    lgn.passwordInput().invoke('attr', 'placeholder').should('contain', 'Password')
}

export function successfullogin(user = envVariables.dev.user.first_user, password = envVariables.dev.user.password ){
    emailField(user)
    passwordField(password)
    loginBtn()
}

export function invalidLogin() {
    emailField('test')
    passwordField('test')
    loginBtn()
    verifyErrorText('Epic sadface: Username and password do not match any user in this service')
   
}

export function loginWithBlankFileds() {
    loginBtn()
    errors('Epic sadface: Username is required');
    
}

export function loginWithBlankEmail() {
    passwordField('test1')
    loginBtn()
    errors('Epic sadface: Username is required')  
    
}

export function loginWithBlankPassword() {
    emailField('test1')
    loginBtn()
    errors('Epic sadface: Password is required')  
}


