export type TodoChangeInputStateType = {
  text: string
}

export type TodoChangeInputActionType = {
  type: 'change'
  payload: string
}

export function todoChangeInputReducer(
  state: TodoChangeInputStateType,
  action: TodoChangeInputActionType
) {
  switch (action.type) {
    case 'change':
      return {
        text: action.payload
      }
  }
}
