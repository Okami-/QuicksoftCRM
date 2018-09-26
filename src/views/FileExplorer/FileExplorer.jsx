import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Folders from "../../components/FileBrowser/Folders";

class FileExplorer extends Component {

    render() {
        return (
            <div className="content">
                <div className="file-explorer-header content-header">
                    <h4>File Explorer</h4>
                </div>
                <Folders />
            </div>
        );
    }
}

export default FileExplorer;