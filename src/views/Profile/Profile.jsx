import React, { Component } from "react";
import { FormGroup, ControlLabel, Grid, Row, Col, FormControl } from "react-bootstrap";
import Card from "../../components/Card/Card";
import UserCard from "../../components/UserCard/UserCard";

import avatar from "../../assets/images/4.jpg";

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

class Profile extends Component {

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={8}>
                            <Card
                                cardTitle="Edit Profile"
                                content={
                                    <form>
                                        <Row>
                                            <div className="col-md-6">
                                                <FieldGroup
                                                    label="Company"
                                                    disabled="true"
                                                    placeholder="Quicksoft Inc"
                                                    type="text"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <FieldGroup
                                                    label="Email"
                                                    defaultValue="test@email.com"
                                                    type="email"
                                                />
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="col-md-6">
                                                <FieldGroup
                                                    label="First Name"
                                                    defaultValue="Richard"
                                                    type="text"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <FieldGroup
                                                    label="Last Name"
                                                    defaultValue="Baker"
                                                    type="text"
                                                />
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="col-md-12">
                                                <FieldGroup
                                                    label="Address"
                                                    defaultValue="123 1'st St. Apt 2"
                                                    type="text"
                                                />
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="col-md-4">
                                                <FieldGroup
                                                    label="City"
                                                    defaultValue="San Francisco"
                                                    type="text"
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <FormGroup controlId="formControlsSelect">
                                                    <ControlLabel>State</ControlLabel>
                                                    <FormControl componentClass="select" placeholder="select">
                                                        <option value="AL">Alabama</option>
                                                        <option value="AK">Alaska</option>
                                                        <option value="AZ">Arizona</option>
                                                        <option value="AR">Arkansas</option>
                                                        <option value="CA">California</option>
                                                        <option value="CO">Colorado</option>
                                                        <option value="CT">Connecticut</option>
                                                        <option value="DE">Delaware</option>
                                                        <option value="DC">District Of Columbia</option>
                                                        <option value="FL">Florida</option>
                                                        <option value="GA">Georgia</option>
                                                        <option value="HI">Hawaii</option>
                                                        <option value="ID">Idaho</option>
                                                        <option value="IL">Illinois</option>
                                                        <option value="IN">Indiana</option>
                                                        <option value="IA">Iowa</option>
                                                        <option value="KS">Kansas</option>
                                                        <option value="KY">Kentucky</option>
                                                        <option value="LA">Louisiana</option>
                                                        <option value="ME">Maine</option>
                                                        <option value="MD">Maryland</option>
                                                        <option value="MA">Massachusetts</option>
                                                        <option value="MI">Michigan</option>
                                                        <option value="MN">Minnesota</option>
                                                        <option value="MS">Mississippi</option>
                                                        <option value="MO">Missouri</option>
                                                        <option value="MT">Montana</option>
                                                        <option value="NE">Nebraska</option>
                                                        <option value="NV">Nevada</option>
                                                        <option value="NH">New Hampshire</option>
                                                        <option value="NJ">New Jersey</option>
                                                        <option value="NM">New Mexico</option>
                                                        <option value="NY">New York</option>
                                                        <option value="NC">North Carolina</option>
                                                        <option value="ND">North Dakota</option>
                                                        <option value="OH">Ohio</option>
                                                        <option value="OK">Oklahoma</option>
                                                        <option value="OR">Oregon</option>
                                                        <option value="PA">Pennsylvania</option>
                                                        <option value="RI">Rhode Island</option>
                                                        <option value="SC">South Carolina</option>
                                                        <option value="SD">South Dakota</option>
                                                        <option value="TN">Tennessee</option>
                                                        <option value="TX">Texas</option>
                                                        <option value="UT">Utah</option>
                                                        <option value="VT">Vermont</option>
                                                        <option value="VA">Virginia</option>
                                                        <option value="WA">Washington</option>
                                                        <option value="WV">West Virginia</option>
                                                        <option value="WI">Wisconsin</option>
                                                        <option value="WY">Wyoming</option>
                                                    </FormControl>
                                                </FormGroup>
                                            </div>
                                            <div className="col-md-4">
                                                <FieldGroup
                                                    label="Zip Code"
                                                    defaultValue="12345"
                                                    type="text"
                                                />
                                            </div>
                                        </Row>
                                    </form>
                                }
                            />
                        </Col>
                        <Col md={4}>
                            <UserCard
                                avatar={avatar}
                                name="Richard Baker"
                                description={
                                    <span>
                                        I like turtles
                                    </span>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Profile;