import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

export default class Projects extends React.Component {
    render() {
        return (
            <Card body style={{ backgroundColor: '#fffff', borderColor: '#333' }}>
            <CardTitle>
                <h3>
                    Projects Section
                </h3>
            </CardTitle>
            <CardText>Projects Text</CardText>
            </Card>
        )
    }
}