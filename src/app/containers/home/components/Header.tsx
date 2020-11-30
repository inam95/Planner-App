import React, { ReactElement } from "react";
import { Col, Row, Input, Button } from "antd";
import { ShoppingFilled, UserOutlined } from "@ant-design/icons";
import { ReactComponent as Logo } from "../../../assets/icons/logo.svg";

import "./Header.scss";

const { Search } = Input;

function Header(): ReactElement {
  return (
    <Row className="homepage_header">
      <Col span={8}>
        <Logo className="header_logo" />
      </Col>
      <Col span={8}>
        <Search
          placeholder="Search pros"
          allowClear
          enterButton="Search"
          size="large"
        />
      </Col>
      <Col span={8} className="homepage_signIn_options">
        <Button size="large" type="primary" icon={<UserOutlined />}>
          Sign in
        </Button>
        <Button size="large" icon={<ShoppingFilled />}>
          Join as pro
        </Button>
      </Col>
    </Row>
  );
}

export default Header;
