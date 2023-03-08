/**
 * Creates the specified todo items
 * @param {string[]} items The items to create
 */
export function addTodos(items) {
    items.forEach((item) => {
        cy.findByRole('textbox').type(item)
        cy.findByRole('textbox').type('{enter}')
    })
}