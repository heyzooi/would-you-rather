import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function PageNotFound({ message }) {
    return (
        <Container className="text-center">
            <Row>
                <Col>404</Col>
            </Row>
            <Row>
                <Col>{message || 'Page not found'}</Col>
            </Row>
        </Container>
    )
}
