import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Pruebas en todoReducer', () => {
  const initialState = [ {
    id: 1,
    description: 'Aprender React',
    done: false
  } ]
  test('debe de regresar el estado inicial', () => {
    const newState = todoReducer(initialState, {})
    expect(newState).toBe(initialState)
  })

  test('debe de agregar un TODO', () => {
    const action = {
      type: '[TODO] Add',
      payload: {
        id: 2,
        description: 'Aprender Mongo',
        done: false
      }
    }
    const newState = todoReducer(initialState, action)
    expect(newState.length).toBe(2)
    expect(newState).toContain(action.payload)
  })

  test('debe de borrar un TODO', () => {
    const action = {
      type: '[TODO] Delete',
      payload: 1
    }
    const newState = todoReducer(initialState, action)
    expect(newState.length).toBe(0)
  })

  test('debe de hacer el toggle del TODO', () => {
    const action = {
      type: '[TODO] Toggle',
      payload: 1
    }

    const newState = todoReducer(initialState, action)
    expect(newState[ 0 ].done).toBe(true)

    const newState2 = todoReducer(newState, action)
    expect(newState2[ 0 ].done).toBe(false)
  })
})