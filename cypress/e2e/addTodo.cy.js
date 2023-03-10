import * as create from './steps/todos/create';
beforeEach(() => {
// Pre-setup
cy.visit('/')

// Actions
create.addTodos(['clean fridge']);
})

describe('Add Todo', () => {
  it('I can add a single todo - test is using class selectors', () => {

    // Expectations
    cy.get('.todo-list').find('li').should('have.length', '1')
    cy.get('.todo-list').find('li').should('have.text', 'clean fridge')
  })

  it('I can add a single todo - test is using accessibilty props (where possible)', () => {
    
    // Expectations
    cy.get('.todo-list').within(() => {
      cy.findAllByRole('listitem').should('have.length', '1')
      cy.findAllByRole('listitem').should('have.text', 'clean fridge')
    })
  })
})