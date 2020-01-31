import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, Form, Toast } from 'react-bootstrap'
import { connect } from 'react-redux'
import { saveQuestion } from '../api'
import { addQuestion } from '../actions/questions'

const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser
    }
}

function NewQuestion({ authedUser, addQuestion }) {
    const [{lastOption1, lastOption2}, setLastOptions] = useState({})
    const [option1, setOption1] = useState("")
    const [option2, setOption2] = useState("")
    const [displayToast, setDisplayToast] = useState(false)

    const sendQuestion = async () => {
        const questionToBeSaved = {
            optionOneText: option1.trim(),
            optionTwoText: option2.trim(),
            author: authedUser.id
        }
        setOption1("")
        setOption2("")
        const questionSaved = await saveQuestion(questionToBeSaved)
        addQuestion(questionSaved)
        setLastOptions({
            lastOption1: questionSaved.optionOne.text,
            lastOption2: questionSaved.optionTwo.text,
        })
        setDisplayToast(true)
        setTimeout(() => setDisplayToast(false), 1500)
    }

    const setOption = (e, setOptionState) => {
        e.preventDefault()
        setOptionState(e.target.value)
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col xs={10}>
                        <Card className="text-center">
                            <Card.Header>
                                <Card.Title>Create New Question</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group>
                                        <Form.Text>Would you rather...</Form.Text>
                                        <Form.Control type="text" placeholder="Type 1st option here" value={option1} onChange={(e) => setOption(e, setOption1)}/>
                                        <Form.Text>OR</Form.Text>
                                        <Form.Control type="text" placeholder="Type 2nd option here" value={option2} onChange={(e) => setOption(e, setOption2)}/>
                                    </Form.Group>
                                    <Button disabled={option1.trim().length === 0 || option2.trim().length === 0} onClick={() => sendQuestion()} className="w-100">Submit</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
            <Toast show={displayToast} style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)'
            }} onClose={() => setDisplayToast(false)}>
                <Toast.Header>
                    <strong className="mr-auto">Would you rather...</strong>
                    <small className="ml-4">just added</small>
                </Toast.Header>
                <Toast.Body className="text-center">
                    <p>{lastOption1}</p>
                    <p>OR</p>
                    <p>{lastOption2}</p>
                </Toast.Body>
            </Toast>
        </>
    )
}

export default connect(mapStateToProps, { addQuestion })(NewQuestion)