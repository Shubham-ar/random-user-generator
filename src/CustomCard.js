import React from 'react'
import { Card, CardBody, CardTitle, CardText, CardFooter, CardLink } from 'reactstrap'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const CustomCard = ({ details }) => {
    return (
        <Card>
            <CardBody className="text-center">
                <img
                    height="150"
                    width="150"
                    className="rounded-circle img-thumbnail border-danger"
                    src={details.picture?.large}
                />
                <CardTitle className="text-primary">
                    <h1>
                        <span >
                            {details.name?.title}{" "}
                        </span>
                        <span>
                            {details.name?.first}{" "}
                        </span>
                        <span>
                            {details.name?.last}
                        </span>
                    </h1>
                </CardTitle>
                <h6 className="text-primary">Age: {details.dob?.age}</h6>
                <CardText >
                    <FaMapMarkedAlt />{" "}
                    {details.location?.city}
                    <p>
                        <FaPhone />{" "}
                        {details.phone}
                    </p>
                </CardText>
                <CardFooter className="text-success">
                    <h6>
                        <FaEnvelope />
                        {" "}{details.email}
                    </h6>
                </CardFooter>
            </CardBody>

        </Card>
    )
}

export default CustomCard;