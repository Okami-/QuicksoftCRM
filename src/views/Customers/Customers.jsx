import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "customers": [
                {
                    name: 'Richard Baker',
                    address: '123 5th st. Los Angelas, Ca 83123',
                    phone: '123-345-2145',
                    email: 'sample@sample.com',
                    created: '12 Nov 2018',
                    id: '32kl4h324lkh',
                },
                {
                    name: 'Richard Baker',
                    address: '123 5th st. Los Angelas, Ca 83123',
                    phone: '123-345-2145',
                    email: 'sample@sample.com',
                    created: '12 Nov 2018',
                    id: '32kl4h324lkh',
                },
                {
                    name: 'Richard Baker',
                    address: '123 5th st. Los Angelas, Ca 83123',
                    phone: '123-345-2145',
                    email: 'sample@sample.com',
                    created: '12 Nov 2018',
                    id: '32kl4h324lkh',
                },
                {
                    name: 'Richard Baker',
                    address: '123 5th st. Los Angelas, Ca 83123',
                    phone: '123-345-2145',
                    email: 'sample@sample.com',
                    created: '12 Nov 2018',
                    id: '32kl4h324lkh',
                },
            ]
        }
    }
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <div className="customer-header content-header">
                        <h4>Customers</h4>
                        <button className="add-customer big-button"><i className="fa fa-user-plus"></i>Add Customer</button>
                    </div>

                    <div className="customer-list">
                        <Table responsive className="no-border">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Created</th>
                                    <th>ID</th>
                                    <th>Settings</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.customers.map((customer, key) => (
                                    <tr key={key}>
                                        <td>{customer.name}</td>
                                        <td>{customer.address}</td>
                                        <td>{customer.phone}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.created}</td>
                                        <td>{customer.id}</td>
                                        <td><span className="fa fa-ellipsis-h fa-1x"></span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Grid>
            </div>
        );
    }
}

export default Customers;