import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import StatsCard from "../../components/StatsCard/StatsCard";
import Card from "../../components/Card/Card";
import ChartistGraph from "react-chartist";
var dataCustomerRetention = {
    labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    series: [
        [287, 385, 490, 492, 554, 586, 698, 695, 658, 700, 850, 1000]
    ]
};
var optionsCustomerRetention = {
    low: 0,
    high: 1000,
    showArea: false,
    height: "245px",
    axisX: {
        showGrid: false
    },
    lineSmooth: true,
    showLine: true,
    showPoint: true,
    fullWidth: true,
    chartPadding: {
        right: 50
    },
};
class Dashboard extends Component {

    render() {
        return (
            <div className="content">
                <h1>Dashboard</h1>
                <Grid fluid>
                    <Row>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="fa fa-server text-warning" />}
                                statsText="Capacity"
                                statsValue="200GB"
                                statsIcon={<i className="fa fa-refresh" />}
                                statsIconText="Updated now"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="fa fa-credit-card text-success" />}
                                statsText="Revenue"
                                statsValue="$1,345"
                                statsIcon={<i className="fa fa-calendar-o" />}
                                statsIconText="Last day"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="fa fa-envelope-open text-danger" />}
                                statsText="Emails"
                                statsValue="23"
                                statsIcon={<i className="fa fa-clock-o" />}
                                statsIconText="In the last hour"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="fa fa-twitter text-info" />}
                                statsText="Followers"
                                statsValue="+45"
                                statsIcon={<i className="fa fa-refresh" />}
                                statsIconText="Updated now"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8}>
                            <Card
                                cardTitle="Customer Retention"
                                content={
                                    <div className="cr-chart">
                                        <ChartistGraph
                                            data={dataCustomerRetention}
                                            type="Line"
                                            options={optionsCustomerRetention}
                                        />
                                    </div>
                                }>
                            </Card>

                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;