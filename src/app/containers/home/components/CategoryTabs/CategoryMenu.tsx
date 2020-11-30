import React from "react";
import { Menu, Row } from "antd";

import "./CategoryMenu.scss";

const CategoryMenu: React.FC = (): JSX.Element => {
  return (
    <Row className="homepage_categoryMenu">
      <Menu mode="horizontal">
        <Menu.SubMenu title="Category One">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu title="Category One">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu title="Category One">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu title="Category One">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Row>
  );
};

export default CategoryMenu;
