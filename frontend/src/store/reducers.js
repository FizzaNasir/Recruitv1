import { STORE_OBJECT } from './actions'

const initialState = {
  storedObject: {},
}

export default function (state = initialState, action) {
  console.log('savinggg')
  switch (action.type) {
    case STORE_OBJECT:
      return { ...state, storedObject: action.payload }
    default:
      return state
  }
}
