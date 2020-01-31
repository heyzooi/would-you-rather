import React from 'react'
import { Card, Button, Badge } from 'react-bootstrap'
import { connect } from 'react-redux'
import { saveQuestionAnswer } from '../api'
import { answerQuestion } from '../actions/questions'

const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser
    }
}

function Question({ question, authedUser, answerQuestion }) {
    const myAnswer = authedUser && authedUser.answers && authedUser.answers[question.id]
    const answered = myAnswer != null
    const formatVotes = (nVotes) => {
        switch (nVotes) {
            case 0: return 'no votes'
            case 1: return '1 vote'
            default: return `${nVotes} votes`
        }
    }
    const sendAnswerQuestion = async (selectedAnswer) => {
        const answer = {
            qid: question.id,
            answer: selectedAnswer,
            authedUser: authedUser.id,
        }
        answerQuestion(answer)
        await saveQuestionAnswer(answer)
    }
    return (
        <Card>
            <Card.Body>
                <Card.Title>Would you rather...</Card.Title>
                <Button disabled={answered} onClick={() => sendAnswerQuestion('optionOne')}>
                    {question.optionOne.text}
                </Button>
                {answered && <span className="ml-3">{formatVotes(question.optionOne.votes.length)}</span>}
                {myAnswer && myAnswer === 'optionOne' && <Badge variant="secondary" className="ml-2">my vote</Badge>}
                <Card.Text className="mt-3">OR</Card.Text>
                <Button disabled={answered} onClick={() => sendAnswerQuestion('optionTwo')}>
                    {question.optionTwo.text}
                </Button>
                {answered && <span className="ml-3">{formatVotes(question.optionTwo.votes.length)}</span>}
                {myAnswer && myAnswer === 'optionTwo' && <Badge variant="secondary" className="ml-2">my vote</Badge>}
            </Card.Body>
        </Card>
    )
}

export default connect(mapStateToProps, { answerQuestion })(Question)