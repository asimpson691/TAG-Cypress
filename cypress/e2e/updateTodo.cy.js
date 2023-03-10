import * as create from "./steps/todos/create";
import * as update from "./steps/todos/update";

beforeEach(() => {
	// Pre-setup
	cy.visit("/");

	// Actions
	create.addTodos(["clean fridge", "polish worktops", "feed dogs"]);
	update.markAllTodosAsDone();
});

describe("Mark All Todos as Done", () => {
	it("Marks all todos as done given all list items are checked", () => {
		// Check all to do items are checked
		cy.get(".todo-list").within(() => {
			cy.get('input[class="toggle"]').should("be.checked");
		});
		// Check todo count in all tab is displayed as 0
		cy.get(".todo-count").should("contain", "0 items left");
		// Check clear completed option is now displayed
		cy.get(".clear-completed").should("be.visible");
	});

	it("Displays 0 active todos within the active list given the active tab is clicked", () => {
		// Click the active tab
		cy.get(".filters").find("li").eq(1).click();
		// Check active list is empty
		cy.get(".todo-list").find("li").should("have.length", "0");
	});

	it("Displays 3 completed todos within the completed list given the completed tab is clicked", () => {
		// Click the completed tab
		cy.get(".filters").find("li").eq(2).click();

		// Check completed list has 3 items
		cy.get(".todo-list").find("li").should("have.length", "3");
	});
});
