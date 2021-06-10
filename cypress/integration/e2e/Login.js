import Login from '../../page-objects/loginPage'
import {elements, ex, invalidLogin, loginWithBlankEmail, loginWithBlankFileds, loginWithBlankPassword, successfullogin} from '../../models/login'
const lg = new Login;
let envVariables = Cypress.env();


describe('Test', () => {
    before(() => {
       ex()
    })   
    
    beforeEach(() => {
        ex()
    })
   
    it('Verify Elements', () => {
        elements()
    });

    it.skip('Login Successful', () => {
        successfullogin()
    });

    it('Invalid Login', () => {
        invalidLogin()
    });

    it('lgn With blank fields error', () => {
        loginWithBlankFileds()
    });

    it('lgn with blank email', () => {
        loginWithBlankEmail()
    });

    it('lgn with blank pass', () => {
        loginWithBlankPassword()
    });

// fdbxdfb
// dfdf

})