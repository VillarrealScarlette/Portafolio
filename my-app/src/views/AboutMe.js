import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

export default class AboutMe extends React.Component {
    render() {
        return (
            <div style={{
                textAlign: "-webkit-center"
            }}>
                <Card body style={{
                backgroundColor: "#F2F8F4",
                borderColor: "#333",
                width: "1173px",
                height: "710px",
                borderRadius: "55px 55px 0px 0px",
                border: "none",
                }}>
                <CardTitle>
                <h3 style={{
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
                Hola! Soy Scarlette, </h3>
                <h3 style={{
                    fontFamily: "Iowan Old Style",
                    fontStyle: "normal",
                    fontWeight: 900,
                    color: "#955066",
                    fontSize: "45px",
                    width: "610px",
                    height: "204px",
                    textAlign: "-webkit-left",
                    position: "absolute",
                    margin: "220px 80px"
                    }}>front end developer & ingeniera comercial.</h3> 
                <br></br>
                <h3 style={{
                    fontFamily: "Iowan Old Style",
                    fontStyle: "normal",
                    fontWeight: 900,
                    color: "#111C11",
                    fontSize: "45px",
                    width: "610px",
                    height: "204px",
                    textAlign: "-webkit-left",
                    position: "absolute",
                    margin: "300px 80px"}}>Un gusto en conocerte!
                </h3>
                </CardTitle>
                <CardText style={{
                        width: "540px",
                        height: "180px",
                        position: "absolute",
                        margin: "425px 80px",
                        textAlign: "initial",
                        fontSize: "27px",
                }}>Me inspira desarrollar proyectos <br></br>digitales que estén al servicio de <br></br>las personas.</CardText>
                </Card>
            </div>
        )
    }
}