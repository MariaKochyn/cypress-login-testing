import Products from '../page-objects/productsPageObjects'
import { ex } from './login';
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



