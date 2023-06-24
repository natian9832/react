import React from 'react';
import {Col, Row} from "antd";

export default function App(props) {
    return (
        <div>
            <Row>
                <Col span={8}>natian</Col>
                <Col span={8} offset={8}>jiujingtian</Col>
                {/*<Col span={8}>jjt</Col>*/}
            </Row>
        </div>
    );
}

