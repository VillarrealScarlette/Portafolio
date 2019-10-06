import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

export default class AboutMe extends React.Component {
    render() {
        return (
            <Card body style={{ backgroundColor: '#fffff', borderColor: '#333' }}>
            <CardTitle>
                <h3>
                AboutMe Section
                </h3>
            </CardTitle>
            <CardText>AboutMe Text</CardText>
            </Card>
        )
    }
}