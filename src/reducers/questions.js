import { ADD_QUESTION, QUESTIONS_RECEIVED, ANSWER_QUESTION } from '../actions/questions'

export default function questions(state = null, action) {
    switch (action.type) {
        case QUESTIONS_RECEIVED:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat(action.authedUser)
                    }
                }
            }
        default:
            return state
    }
}