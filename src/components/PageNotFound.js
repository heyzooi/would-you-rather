import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function PageNotFound() {
    return (
        <Container className="text-center">
            <Row>
                <Col>404</Col>
            </Row>
            <Row>
                <Col>Page not found</Col>
            </Row>
        </Container>
    )
}
