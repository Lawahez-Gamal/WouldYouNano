import { getInitialData } from '../utils/api'
import { addUserQuestion, saveUserAnswer, receiveUsers } from '../actions/users'
import { addQuestion, receiveQuestions, saveQuestionAnswer } from '../actions/questions'
import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, questions})=> {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions))
        })
    }
}

export function handleAddQuestion (optionOneText, optionTwoText){
    return (dispatch, getState) => {
        const { authUser } = getState();
        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: authUser
        })
        .then((question) => {
            dispatch(addQuestion(question));
            dispatch(addUserQuestion(authUser, question.id))
        })

    }
}

export function handleAnswer (questid, option) {
    return (dispatch, getState) => {
      const { authUser } = getState();
      const info = {
        authUser: authUser,
        questid,
        answer: option
      };
      _saveQuestionAnswer(info)
          .then(() => {
              dispatch(saveQuestionAnswer(authUser, questid, option));
              dispatch(saveUserAnswer(authUser, questid, option))
          })
    }
}