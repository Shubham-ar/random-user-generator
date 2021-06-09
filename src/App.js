import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Container, Row, Col } from 'reactstrap'
import Axios from 'axios';
import CustomCard from './CustomCard';


function App() {
  const [details, setDetails] = useState({})

  const fetchDetails = async () => {
    // const response= await Axios.get('https://randomuser.me/api/');
    // but here we want response>data>results>gender and all information so well skip directly to the main part
    const { data } = await Axios.get('https://randomuser.me/api/');

    console.log("RESPONSE:", data)

    const details = data.results[0]
    setDetails(details)

    console.log("DETAILS:", details)
  }

  useEffect(() => {
    fetchDetails()
  }, [])


  return (
    <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <CustomCard details={details} />
        </Col>
      </Row>

    </Container>
  );
}

export default App;
