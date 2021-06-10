import { successfullogin, ex } from "../models/login"
import {images, example, result, addingToCart} from '../models/products'
import Products from '../page-objects/productsPageObjects'
const prod = new Products;

describe('Testing Login Page', () => {
    before(() => {
       ex()
       successfullogin()
    }) 

    it('Verify images to be visible', () => {
        images()
        addingToCart()
    });

    it.only('Prices and images', () => {
        successfullogin()
        cy.wait(5000)
        result(prod.elements(), prod.prices())
    });



})