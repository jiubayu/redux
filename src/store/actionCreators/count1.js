import { ADD1,MINUS1 } from "../action-types"
const add = (payload)=>({type:ADD1,payload});
const minus = (payload)=>({type:MINUS1,payload});
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  add,
  minus,
};