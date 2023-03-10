/**

Updates the specified todo items
@param {string[]} items The items to create
*/
export function markTodoAsDone(items) {
	items.forEach((item) => {
		cy.get(".todo-list").within(() => {
			cy.get("label")
				.contains(item)
				.parent()
				.get('input[class="toggle"]')
				.click({ multiple: true });
		});
	});
}
export function markAllTodosAsDone() {
	cy.get(".todo-list").within(() => {
		cy.get('input[class="toggle"]').click({ multiple: true });
	});
}
