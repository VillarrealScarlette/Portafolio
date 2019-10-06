import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

export default class Contact extends React.Component {
    render() {
        return (
            <Card body style={{ backgroundColor: '#fffff', borderColor: '#333' }}>
            <CardTitle>
                <h3>
                    Contact Section
                </h3>
            </CardTitle>
            <CardText>Contact Text</CardText>
            </Card>
        )
    }
}