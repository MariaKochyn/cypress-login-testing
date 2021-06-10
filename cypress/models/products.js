import Products from '../page-objects/productsPageObjects'
import { ex } from './login';
const prod = new Products();


const verifyAllImage = (text) => prod.prodImage(text).should('be.visible'); 

export function images(){ 
    verifyAllImage('Sauce Labs Backpack')
    verifyAllImage('Sauce Labs Bike Light')
    verifyAllImage('Sauce Labs Bolt T-Shirt')
    verifyAllImage('Sauce Labs Fleece Jacket')
    verifyAllImage('Sauce Labs Onesie')
    verifyAllImage('Test.allTheThings() T-Shirt (Red)')
}

export function addingToCart(){
    prod.addToCartBtn1().should('be.be.enabled').click()
    prod.cartBtn().click()
    cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
    prod.productInCart().should('be.visible')

}

export function example(element, prices) {
    cy.get(element).should('exist').and('have.text', prices);
}

export function result(element, prices) {
    for (let i = 0; i < element.length || i < prices.length; i++) {
        example(element[i], prices[i])
    }
}





// possible to add a product to Caret
// added product is displayed in cart
// possible to delete from cart
