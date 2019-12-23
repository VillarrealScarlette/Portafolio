import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

export default class Projects extends React.Component {
    render() {
        return (
            <div style={{
                textAlign: "-webkit-center",
                marginTop: "10px"
            }}>
                <Card body style={{
                    backgroundColor: "#F2E9EC",
                    borderColor: "#333",
                    width: "1173px",
                    height: "710px",
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
                    margin: "165px 80px"
                    }}>
                    Porqué trabajar conmigo?
            </CardTitle>
            <CardText style={{
                        width: "540px",
                        height: "180px",
                        position: "absolute",
                        margin: "425px 80px",
                        textAlign: "initial",
                        fontSize: "27px",
                }}>Razones <br></br> Contacto</CardText>
            </Card>

            </div>
        )
    }
}