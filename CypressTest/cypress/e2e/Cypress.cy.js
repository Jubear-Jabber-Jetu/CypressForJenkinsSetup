// cypress/integration/facebook_login.spec.js

describe('Facebook Login Automation with Invalid Credentials', () => {
  const email = 'invalid-email@example.com'
  const password = 'invalid-password'

  it('should display an error message with invalid login credentials', () => {
    cy.visit('https://www.facebook.com/')
    cy.get('#email').type(email)
    cy.get('#pass').type(password)
    cy.get('[data-testid="royal_login_button"]').click()
    //cy.get('div._9ay7').should('contain', 'The email or mobile number you entered isn’t connected to an account.')
    cy.get('.UIFullPage_Container')
  })
})
