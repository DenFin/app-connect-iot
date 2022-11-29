describe('App', () => {
  it('should display BEGA Connect logo', () => {
    cy.visit('/')
    cy.getByTestId('connect-logo').should('exist')
  })
})
