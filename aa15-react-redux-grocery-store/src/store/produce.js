import produceData from '../mockData/produce.json'
export default function produceReducer(state = {}, action) {
  switch (action.type) {
    case POPULATE: {
      const newProds = {};
      action.produce.forEach(product => {
        newProds[product.id] = product
      });
      return newProds
    }
    default:
      return state;
  }
}

const POPULATE = "produce/POPULATE";

export function populateProduce() {
  return {
    type: POPULATE,
    produce: produceData
  }
}
