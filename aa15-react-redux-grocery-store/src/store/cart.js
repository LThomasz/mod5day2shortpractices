export function cartReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      let count;
      if (!state[action.id]) {
        count = 1
      } else {
        count = state[action.id].count + 1
      }

      const newObj = {
        ...state,
        [action.id]: {
          id: action.id,
          count
        }

      };
      return newObj
    }
    case REMOVE_FROM_CART: {
      const newObj = { ...state }
      delete newObj[action.id]

      return newObj;
    }
    default:
      return state;
  }
}

const ADD_TO_CART = "cart/ADD_TO_CART"
export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    id
  }
}

const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART'
export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    id
  }
}
