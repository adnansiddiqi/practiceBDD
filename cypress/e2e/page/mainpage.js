class main{


    getUsername(id){
        cy.get('#user-name').type(id)

    }

    getPassword(password){
        cy.get('#password').type(password)
    }

    clickLoginBtn(){
        cy.get('#login-button').click()
    }

    verfiyProfile(){
        cy.get('.title').should('be.visible')
    }
}

export default main