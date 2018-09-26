import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";



class Staff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "staff": [
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
                <div className="staff-header content-header">
                    <h4>Staff</h4>
                    <button className="add-staff big-button"><i class="fa fa-user-plus"></i>Add Staff </button>
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
                            {this.state.staff.map((index, key) => (
                                <tr key={key}>
                                    <td>{index.name}</td>
                                    <td>{index.address}</td>
                                    <td>{index.phone}</td>
                                    <td>{index.email}</td>
                                    <td>{index.created}</td>
                                    <td>{index.id}</td>
                                    <td><span className="fa fa-ellipsis-h fa-1x"></span></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Staff;