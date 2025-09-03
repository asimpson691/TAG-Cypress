import * as create from './steps/todos/create';

describe('Add Todo', () => {
  it('I can add a single todo - test is using class selectors', () => {
    // Pre-setup
    cy.visit('/')

    // Actions
    create.addTodos(['clean fridge']);

    // Expectations
    cy.get('.todo-list').find('li').should('have.length', '1')
    cy.get('.todo-list').find('li').should('have.text', 'clean fridge')
  })

  it('I can add a single todo - test is using accessibility props (where possible)', () => {
    // Pre-setup
    cy.visit('/')
    
    // Actions
    create.addTodos(['clean fridge']);
    
    // Expectations
    cy.get('.todo-list').within(() => {
      cy.findAllByRole('listitem').should('have.length', '1')
      cy.findAllByRole('listitem').should('have.text', 'clean fridge')
    })
  })
})