import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">
                        {this.props.cardTitle}
                    </h4>
                </div>
                <div className="content">
                    {this.props.content}
                    <div className="footer">
                        {this.props.stats != null ? <hr /> : ""}
                        <div className="stats">
                            {this.props.stats}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
