export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';
export const USER_ANSWER_QUESTION = 'USER_ANSWER_QUESTION';

export function receiveUsers(users){
    return{
        type: RECEIVE_USERS,
        users
    }
}

export function addUserQuestion (authUser, questid) {
    return {
      type: ADD_USER_QUESTION,
      authUser,
      questid
    }
  }

export function saveUserAnswer (auth, questid, option) {
  return {
    type: USER_ANSWER_QUESTION,
    auth,
    questid,
    option
  }
}