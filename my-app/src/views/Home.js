import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const Home = (props) => {
  return (
    <div>
      <Card body style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardTitle>PORTAFOLIO</CardTitle>
          <CardText>Portfolio about Scarlette Porject's</CardText>
      </Card>
    </div>
  );
};

export default Home;