import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'


function Layout() {
    return (
<Container style={{ marginTop: "40px", textAlign: "center" }}>
    <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
        <Row>
            <Col xs=".5" >
                <Image src="https://www.instacart.com/image-server/87x87/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Col sm="1"></Col>
        <Row >
            <Col xs=".5">
                <Image src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/279/59eb00b1-2e19-4912-bf2e-0c7a1f71f8b1.png" roundedCircle />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Col sm="1"></Col>
        <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}}>
            <Col xs=".5" >
                <Image src="https://www.instacart.com/image-server/87x87/www.instacart.com/assets/domains/warehouse/logo/1573/e04c8eaf-a180-4753-b651-8c4a1c81845c.png" roundedCircle />
            </Col>
            <Col md="6">
                <h5 style={{ fontWeight: "bold" }}>Walgreens</h5>
                <p>Delivery</p>
            </Col>
        </Row>
    </Row>
    </Container>
    )
}

export default Layout