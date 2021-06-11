import { successfullogin, ex } from "../../models/login"
import {images, example, result, addingToCart, addAllToCart, removeAllFromCart} from '../../models/products'
import Products from '../../page-objects/productsPageObjects'
const prod = new Products();

describe('Testing Login Page', () => {
    before(() => {
       ex()
       successfullogin()
    }) 

    it('Verify images to be visible', () => {
        images()
    });

    it('Prices and images', () => {
        result(prod.elements(), prod.prices())
    });

    it('Add all products to cart', () => {
        addAllToCart(prod.addToCartBtn())
    });

    it('Remove all from cart', () => {
        removeAllFromCart(prod.removeProdBtn())
    });



})