import React from 'react';
import Experience from '../components/Experience'
import { Card, CardTitle, CardText } from 'reactstrap';

export default class Projects extends React.Component {
    render() {
        return (
            <div style={{
                textAlign: "-webkit-center",
                marginTop: "10px"
            }}>
                <Card body style={{
                    backgroundColor: "#F8F7EC",
                    borderColor: "#333",
                    width: "1173px",
                    height: "auto",
                    borderRadius: "55px 55px 0px 0px",
                    border: "none",
                }}>
                <CardTitle style={{
                    fontFamily: "Iowan Old Style",
                    fontStyle: "normal",
                    fontWeight: 900,
                    color: "#111C11",
                    fontSize: "45px",
                    width: "610px",
                    height: "204px",
                    textAlign: "-webkit-left",
                    position: "absolute",
                    }}>
                    Mi experiencia
            </CardTitle>
            <CardText style={{
                        width: "540px",
                        height: "180px",
                        position: "absolute",
                        margin: "65px 80px",
                        textAlign: "initial",
                        fontSize: "27px",
                }}>Reseña sobre el desarrollo de proyectos</CardText>
            < Experience />
            </Card>

            </div>
        )
    }
}