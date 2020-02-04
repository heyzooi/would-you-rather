import React, { useEffect } from 'react'
import { getQuestions }  from '../api'
import { ListGroup, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import { questionsReceived } from '../actions/questions'
import Question from './Question'

const mapStateToProps = ({ questions }) => {
    return {
        questions,
    }
}

function Leaderboard({ questions, questionsReceived }) {
    useEffect(() => {
        async function fetchData() {
            const questions = await getQuestions()
            questionsReceived(questions)
        }
        if (questions === null) {
            fetchData()
        }
    })
    if (questions == null) {
        return (
            <div className="text-center mt-4">
                <Spinner animation="border"/>
            </div>
        )
    }
    const questionsArray = Object.keys(questions).map(questionId => questions[questionId])
        .sort((question1, question2) => question2.timestamp - question1.timestamp)
        .sort((question1, question2) => (question2.optionOne.votes.length + question2.optionTwo.votes.length) - (question1.optionOne.votes.length + question1.optionTwo.votes.length))
    return (
        <ListGroup variant="flush">
            {questionsArray.map(question => (
                <ListGroup.Item key={question.id}>
                    <Question question={question} showVotes={true} disableVoteAction={true} showTotalVotes={true}/>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default connect(mapStateToProps, { questionsReceived })(Leaderboard)