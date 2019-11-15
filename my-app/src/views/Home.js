import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const Home = (props) => {
  return (
    <div>
      <Card body style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardTitle>PORTFOLIO</CardTitle>
          <CardText>Portfolio about Scarlette Project's</CardText>
      </Card>
    </div>
  );
};

export default Home;