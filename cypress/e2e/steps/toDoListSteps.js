export const addTodos = function (todoItems) {
  todoItems.forEach((todoItem) => {
    cy.findByRole('textbox').type(todoItem)
      cy.findByRole('textbox').type('{enter}')
  })
}

export const assertTodosAppearInList = function (todoItems) {
  let length = todoItems.length
  todoItems.forEach((todoItem) => {
    cy.get("label").contains(todoItem)
  })
  cy.get(".todo-list").find('li').should('have.length', length)
}