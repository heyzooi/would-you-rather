import React, { useEffect } from 'react'
import { Card, Button, Badge, Container, Row, Col, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import { saveQuestionAnswer, getQuestions } from '../api'
import { answerQuestion, questionsReceived } from '../actions/questions'

const mapStateToProps = ({ authedUser, questions }) => {
    return {
        authedUser,
        questions,
    }
}

function Question({ questions, questionsReceived, questionId, question, authedUser, answerQuestion, showVotes, disableVoteAction, showTotalVotes }) {
    useEffect(() => {
        async function fetchData() {
            const questions = await getQuestions()
            questionsReceived(questions)
        }
        if (questions === null) {
            fetchData()
        }
    })
    if (!questions) {
        return (
            <div className="text-center mt-4">
                <Spinner animation="border"/>
            </div>
        )
    }
    question = question || questions[questionId]
    showTotalVotes = showTotalVotes || questionId != null
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
                <Card.Title>
                    <a href={`/questions/${question.id}`}>Would you rather...</a>
                </Card.Title>
                <Container className="mw-100 p-0">
                    <Row>
                        <Col sm={8}>
                            <Button disabled={disableVoteAction || answered} onClick={() => sendAnswerQuestion('optionOne')}>
                                {question.optionOne.text}
                            </Button>
                            {(showVotes || answered) && <span className="ml-3">{formatVotes(question.optionOne.votes.length)}</span>}
                            {myAnswer && myAnswer === 'optionOne' && <Badge variant="secondary" className="ml-2">my vote</Badge>}
                            <Card.Text className="mt-3">OR</Card.Text>
                            <Button disabled={disableVoteAction || answered} onClick={() => sendAnswerQuestion('optionTwo')}>
                                {question.optionTwo.text}
                            </Button>
                            {(showVotes || answered) && <span className="ml-3">{formatVotes(question.optionTwo.votes.length)}</span>}
                            {myAnswer && myAnswer === 'optionTwo' && <Badge variant="secondary" className="ml-2">my vote</Badge>}
                        </Col>
                        {showTotalVotes && (
                            <Col sm={4}>
                                <h1>
                                {(showVotes || answered) && formatVotes(question.optionOne.votes.length + question.optionTwo.votes.length)}
                                </h1>
                            </Col>
                        )}
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default connect(mapStateToProps, { answerQuestion, questionsReceived })(Question)