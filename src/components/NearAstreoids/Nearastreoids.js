import React from 'react'
import Nasaastreoids from "../Api/Nasaastreoids"
import { Row, Card } from "react-bootstrap"

export default function Nearastreoids() {
    const { responseObj } = Nasaastreoids()
    return (
        <Row className="justify-content-center align-items-center">
        {
            responseObj.map((data) => (<Card className="text-center bg-danger text-white m-3">
               
                <Card.Title>
                    Asteroid:{data.name}
                </Card.Title>
                <Card.Body>
                    <Card.Text>
                         {!data.is_potentially_hazardous_asteroid && "Safe"} {data.is_potentially_hazardous_asteroid && "Dangerous"}
                    </Card.Text>
                    <Card.Text>
                        Close Approach Time: {data.close_approach_data[0].close_approach_date_full}
                    </Card.Text>
                    <Card.Text>
                    Miss Distance: {data.close_approach_data
                    .map((data) => (`${data["miss_distance"].kilometers} kilometers`))}
                    </Card.Text>
                </Card.Body>
            </Card>))
        }
        </Row>
    )
}
