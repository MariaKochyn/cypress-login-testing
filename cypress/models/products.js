import Products from '../page-objects/productsPageObjects'
import { ex, successfullogin } from './login';
const prod = new Products();

const verifyAllImage = (text) => prod.prodImage(text).should('be.visible'); 

export function images(){ 
    cy.url().should('include', 'https://www.saucedemo.com/inventory.html')
    verifyAllImage('Sauce Labs Backpack')
    verifyAllImage('Sauce Labs Bike Light')
    verifyAllImage('Sauce Labs Bolt T-Shirt')
    verifyAllImage('Sauce Labs Fleece Jacket')
    verifyAllImage('Sauce Labs Onesie')
    verifyAllImage('Test.allTheThings() T-Shirt (Red)')
}

export function example(element, prices) {
    cy.get(element).should('exist').and('have.text', prices);
}

export function result(element, prices) {
    for (let i = 0; i < element.length || i < prices.length; i++) {
        example(element[i], prices[i])
    }
}

export function addAllToCart(element) {
    for (let i = 0; i < element.length; i++) {
        cy.get(element[i]).should('exist').click()
    }   
}

export function removeAllFromCart(element) {  
    for (let i = 0; i < element.length; i++) {
    cy.get(element[i]).should('exist').click()
}
}

export function removeItemFromCart() {  
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    prod.cartBtn().click()
    successfullogin()
    prod.cartBtn().click()
    cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
    cy.get('#remove-sauce-labs-backpack').should('be.visible').click()
    cy.get('#remove-sauce-labs-backpack').should('not.exist')
}

export function successfulOrder() {
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    prod.cartBtn().click()
    prod.checkoutBtn().should('be.enabled').click()
    cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
    prod.checkoutForm().should('be.visible')
    prod.firstNameField().type('User')
    prod.lastNameField().type('Test')
    prod.zipCodeField().type('79070')
    prod.continueBtn().click()
    cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html')
    prod.cartItem().should('be.visible')
    prod.finishBtn().should('be.enabled').click()
    cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html')
    prod.thankYouMessage().should('be.visible').and('contain', 'THANK YOU FOR YOUR ORDER')
    prod.backHomeBtn().should('be.enabled').click()

}





