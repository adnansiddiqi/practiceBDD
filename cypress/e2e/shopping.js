const { Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor");
import { when } from "cypress/types/jquery";
 import main from "../../page/mainpage";
 import products from "../../page/products";
 const landingpage = new main()
 const product = new products()

Given('user select to buy backpack', ()=>{
    cy.visit("https://www.saucedemo.com/")
    landingpage.getUsername("standard_user")
    landingpage.getPassword("secret_sauce")
    landingpage.clickLoginBtn()
    product.chooseBackPack()
    cy.log("this is from RMS123 branch")
    cy.log("this is the second change i am making")
    cy.log("this is the second change afetr stash")

})
when('user enters shopping details', ()=>{
    product.enterShoppingDetails()
})
Then('user should get order confirmation', ()=>{
    product.orderConfirmation()
})