const { Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor");

Given('user is on home page',()=>{

    cy.visit('https://www.saucedemo.com/')
})

When('user enter valid credentials', ()=>{
    cy.get('#user-name').type("standard_user")
    cy.get('#password').type("secret_sauce")
    cy.get('#login-button').click()
})

Then('user should be able to login', ()=>{
    cy.get('.title').should('be.visible')
    cy.log("this is the third change i am making")
    cy.log("this is stash pratice line")
    cy.log("new statement")
})

Given('user is at home page', ()=>{
    cy.visit('https://www.saucedemo.com/')
})

When('user enter invalid credentials', ()=>{
    cy.get('#user-name').type("standard_user1")
    cy.get('#password').type("secret_sauce1")
    cy.get('#login-button').click()
})

Then('user should not be able to login', ()=>{
    cy.get("h3[data-test='error']").should('be.visible')
})

Given('user is on landing page', ()=>{
    cy.visit('https://www.saucedemo.com/')
})

When("user enter {string} and {string}", (id,password)=>{
    cy.get('#user-name').type(id)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})


Then('user should login to profile', ()=>{
    cy.get("h3[data-test='error']").should('be.visible')

})