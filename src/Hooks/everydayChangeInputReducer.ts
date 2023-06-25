export type EverydayChangeInputStateType = {
  text: string
}

export type EverydayChangeInputActionType = {
  type: 'change'
  payload: string
}

export function everydayChangeInputReducer(
  state: EverydayChangeInputStateType,
  action: EverydayChangeInputActionType
) {
  switch (action.type) {
    case 'change':
      return {
        text: action.payload
      }
  }
}
