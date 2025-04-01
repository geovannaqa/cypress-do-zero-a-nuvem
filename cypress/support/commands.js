Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'Geovanna',
    lastName: 'Santos',
    email: 'teste@teste.com',
    text:'testes'
}) => {
    
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.contains('button', 'Enviar').click()
})