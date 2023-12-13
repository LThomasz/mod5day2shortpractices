
export function cartReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log("current state:", state)
      console.log("current action:", action)

      let count;
      if (!state[action.id]) {
        console.log("count in if: ", count)
        count = 1
      } else {
        console.log("count in else: ", count)
        count = state[action.id].count + 1
      }

      console.log("count after assignment: ",count)

      const newObj = {
        ...state,
        [action.id]: {
          id: action.id,
          count
        }

      };
      return newObj
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
