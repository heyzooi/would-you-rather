import { SET_AUTHED_USER } from '../actions/authedUser'
import { ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'

export default function authedUser(state = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.user
        case ADD_QUESTION:
            return {
                ...state,
                questions: state.questions.concat([
                    action.question.id
                ])
            }
        case ANSWER_QUESTION:
            return {
                ...state,
                answers: {
                    ...state.answers,
                    [action.qid]: action.answer
                }
            }
        default:
            return state
    }
}