import React, { Component } from 'react'
import { Card, Col, Container, Row, Form, FloatingLabel, Button } from 'react-bootstrap'
import "./Permits.css";

export default class Permits extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                        <Card>
                   <h5>Permit type</h5>
                   <Form>
  {[ 'radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Govermental"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="Commercial"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
      <Form.Check
              inline
              label="Personal"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
      />
      <br/>
            <Form.Check
        inline
        label="fragment_gathering_permit_gathering_type_institutional_self_quarantine"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
    </div>
  ))}
</Form>




<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Place Name </Form.Label>
    <Form.Control type="text" placeholder="Place name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Number of expected Visitors </Form.Label>
    <Form.Control type="text" placeholder="Number of expected Visitors" />
  </Form.Group>
</Form>
<hr/>
<h5>People Authorized to View the Permit</h5>
<Row className="g-2">
  <Col md>
      <br/>
      <h6>National/Iqama number</h6>
    <FloatingLabel class="labels" name="ncdkjcn" controlId="floatingInputGrid">
      <Form.Control  type="email" placeholder="name@example.com" />
    </FloatingLabel>
  </Col>
  <Col md>
      <br/>      <br/>

    <FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
      <Form.Select aria-label="Floating label select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </FloatingLabel>
    <Button variant="info"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
</svg>Add a Delegator</Button>{' '}

<Button style={{backgroundColor: "#2eafa1"}} variant="success">Request Permit</Button>{' '}


  </Col>
</Row>
                        </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
