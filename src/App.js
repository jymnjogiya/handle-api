import React,{useState,useEffect} from "react"
import {
  Container,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Col  
} from "reactstrap"
import {FaEnvelope,FaMapMarkedAlt,FaPhone} from "react-icons/fa"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

import Axios from "axios"


export default function App() {
  const [details,setDetails] = useState({})

  const fetchDetails = async () => {
    const {data} = await Axios.get("https://randomuser.me/api/")
    console.log(data)

    const details = data.results[0]

    setDetails(details);
  }

  useEffect(() => {
    fetchDetails()
  }, [])
  return (
    <>
<Row className="bg-white p-2 "> 
    <h5 className="text-center">Designed by @jaymeenjogiyappsv@gmail.com</h5>
</Row>
<Container fluid className="p-4 bg-primary App">
  
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
        <h1>Refresh for new Random user</h1>
        <h2 className="text-white">This page uses randomuser.me api</h2>
        <Card>
          <CardBody className="text-center">
            <img height="150" width="150"
            className="round-circle image-thumbnail border-danger"
            src={details.picture?.large}/>
            <CardTitle className="text-primary">Coder</CardTitle>
          <CardText>{details.name?.title+" "+details.name?.first}</CardText>
          <CardText>
            <FaMapMarkedAlt />
            {details.location?.state}
          </CardText>
          <CardText>
            <FaPhone />
            {details.phone}
          </CardText>

          </CardBody>
        </Card>
        </Col>
      </Row>
      
      
 

    </Container>

    
    </>
  
  )
}



