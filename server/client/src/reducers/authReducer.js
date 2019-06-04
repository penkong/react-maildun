import { FETCH_USER } from '../actions/types';
//null we dont know user is on or not
export default function (state = null, action){
  // console.log(action);
  switch (action.type){
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}

