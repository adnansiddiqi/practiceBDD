class products{
    chooseBackPack(){
        cy.get("#add-to-cart-sauce-labs-backpack").click()
        cy.get(".shopping_cart_badge").click()
        cy.get("#checkout").click()
        cy.get("#first-name").type("Alpha")
        cy.get("#last-name").type("Male")
        cy.get("abcd")
    }

    enterShoppingDetails(){
        cy.get("#checkout").click()
        cy.get("#first-name").type("Alpha")
        cy.get("#last-name").type("Male")
        cy.get("abcd")
        cy.get("//input[@id='continue']")
        cy.get("//button[@id='finish']").click()
    }

    orderConfirmation(){
        cy.get(".complete-header").should('be.visible')
        cy.get("#back-to-products").should('be.visible')
    }



}
export default products