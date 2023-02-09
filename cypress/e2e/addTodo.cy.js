describe('Add Todo', () => {
  it('I can add a single todo - test is using class selectors', () => {
    // Pre-setup
    cy.visit('/')

    // Actions
    cy.get('.new-todo').type('clean fridge')
    cy.get('.new-todo').type('{enter}')

    // Expectations
    cy.get('.todo-list').find('li').should('have.length', '1')
    cy.get('.todo-list').find('li').should('have.text', 'clean fridge')
  })

  it('I can add a single todo - test is using accessibilty props', () => {
    // Pre-setup
    cy.visit('/')

    // Actions
    cy.findByRole('textbox', { Name: 'What needs to be done?'}).type('clean fridge')
    cy.findByRole('textbox', { Name: 'What needs to be done?'}).type('{enter}')
    
    // Expectations
    cy.get('.todo-list').within(() => {
      cy.findAllByRole('listitem').should('have.length', '1')
      cy.findAllByRole('listitem').should('have.text', 'clean fridge')
    })
  })
})