import {addTodos, assertTodosAppearInList} from "../../steps/toDoListSteps"

describe('to do list tests', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('When I add todos they are listed', () => {
      const thingsToDo = ["clean the kitchen", "make the bed"]
      console.log("bee" + thingsToDo)
      addTodos(thingsToDo)
      assertTodosAppearInList(thingsToDo)
    })
})