import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Folders from "../../components/FileBrowser/Folders";

class FileExplorer extends Component {

    render() {
        return (
            <div className="content">
                <h1>File Explorer</h1>
                <Folders />
            </div>
        );
    }
}

export default FileExplorer;