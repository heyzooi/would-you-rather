import React, { useState, useEffect } from 'react'
import { Modal, Button, Spinner, ListGroup, Figure } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getUsers } from '../api'
import { setAuthedUser } from '../actions/authedUser'

const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser
    }
}

function LoginDialog({ authedUser, setAuthedUser }) {
    
    const show = authedUser === null
    const [users, setUsers] = useState(null)
    const [selectedUser, setSelectedUser] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const users = await getUsers()
            setUsers(users)
        }
        if (!users) {
            fetchData()
        }
    })

    return (
        <Modal show={show}>
            <Modal.Header>
                <Modal.Title>Select a user to login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {!users && (
                    <div className="text-center mb-1">
                        <Spinner animation="border"/>
                    </div>
                )}
                {users && (
                    <ListGroup className="mb-3 w-100">
                        {Object.keys(users).map(userId => users[userId]).map(user => (
                            <ListGroup.Item key={user.id} eventKey={user.id} active={selectedUser && selectedUser.id === user.id} onClick={() => setSelectedUser(user)}>
                                <Figure.Image width={50} height={50} src={user.avatarURL} roundedCircle thumbnail className="mr-2"/>
                                {`${user.name} (${user.id})`}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
                <Button className="w-100" onClick={() => setAuthedUser(selectedUser)} disabled={selectedUser === null}>Login</Button>
            </Modal.Body>
        </Modal>
    )
}

export default connect(mapStateToProps, { setAuthedUser })(LoginDialog)