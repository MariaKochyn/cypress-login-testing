export default class Products {
 
    logoIcon(){
        return cy.get('.app_logo')
    }

    cartBtn(){
        return cy.get('.shopping_cart_link')
    }

    menuBtn(){
        return cy.get('#react-burger-menu-btn')
    }

    filtersContainer(){
        return cy.get('.product_sort_container')
    }

    manIcon(){
        return cy.get('.peek')
    }

    prodImage(text){
        return cy.xpath(`//img[@alt='${text}']`)
    }

    addToCartBtn1(){
        return cy.get('#add-to-cart-sauce-labs-backpack')
    }

    addToCartBtn2(){
        return cy.get('#add-to-cart-sauce-labs-bike-light')
    }

    addToCartBtn3(){
        return cy.get('#add-to-cart-sauce-labs-bolt-t-shirt')
    }

    addToCartBtn4(){
        return cy.get('#add-to-cart-sauce-labs-fleece-jacket')
    }

    addToCartBtn5(){
        return cy.get('#add-to-cart-sauce-labs-onesie')
    }

    addToCartBtn6(){
        return cy.get('#add-to-cart-test.allthethings()-t-shirt-(red)')
    }

    productInCart(){
        return cy.get('.cart_item')
    }

    elements() {
        return [
            "div[class='inventory_list'] div:nth-child(1) div:nth-child(2) div:nth-child(2) div:nth-child(1)",
            "div[id='inventory_container'] div:nth-child(2) div:nth-child(2) div:nth-child(2) div:nth-child(1)",
            "div:nth-child(3) div:nth-child(2) div:nth-child(2) div:nth-child(1)",
            "div:nth-child(4) div:nth-child(2) div:nth-child(2) div:nth-child(1)",
            "div:nth-child(5) div:nth-child(2) div:nth-child(2) div:nth-child(1)",
            "div:nth-child(6) div:nth-child(2) div:nth-child(2) div:nth-child(1)"
        ]
    }

    prices() {
        return [
            "$29.99",
            "$9.99",
            "$15.99",
            "$49.99",
            "$7.99",
            "$15.99"
        ]
    }

    removeFromCartBtn() {
        return [
            "remove-sauce-labs-backpack",
            "remove-sauce-labs-bike-light",
            "remove-sauce-labs-bolt-t-shirt",
            "remove-sauce-labs-fleece-jacket",
            "remove-sauce-labs-onesie",
            "remove-test.allthethings()-t-shirt-(red)"

        ]
    }
}