import produceData from '../mockData/produce.json'
export default function produceReducer(state = {}, action) {
  switch (action.type) {
    case POPULATE:
      return {
        ...action.produce
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
