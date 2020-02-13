import { ActionType } from "typesafe-actions";
import * as actions from './actions';

export type SampleAction = ActionType<typeof actions>;

export type User = {
    id: number;
    name : string
};
export type Post = {
  userId : number,
  id : number,
  title : string,
  body : string,
}

export type SampleState = {
    post : Post | null,
    users : [User] | null
}

