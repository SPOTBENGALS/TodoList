export type EverydayInputStateType = {
  text: string
}

export type EverydayInputActionType =
  | {
      type: 'change'
      payload: string
    }
  | {
      type: 'clear'
    }

export function everydayInputReducer(
  state: EverydayInputStateType,
  action: EverydayInputActionType
) {
  switch (action.type) {
    case 'change':
      return {
        text: action.payload
      }
    case 'clear':
      return {
        text: ''
      }
  }
}
