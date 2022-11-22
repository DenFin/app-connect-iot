describe('App', () => {
  it('should display welcome message', () => {
    cy.visit('/')
    cy.getByTestId('connect-logo').should('exist')
  })
})
