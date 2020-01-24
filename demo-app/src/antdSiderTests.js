import React, { useState } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Icon } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import FakeBuilding from "./fakeBuilding";
import FakeHome from "./fakeHome";

const { Header, Content, Sider } = Layout;

const AntDSiderTest = () => {
  const [collapsed, setCollapsed] = useState(false);

  const buttonClicked = () => {
    setCollapsed(!collapsed);
  };

  const MenuItemClickend = e => {
    //let returnedObject = JSON.stringify(e);
    //const { target } = e;
    //alert("MenuItem: " + target.value);
  };

  return (
    <Layout>
      <Router>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            onClick={MenuItemClickend}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/">
                  <Icon type="user" />
                  <span key="1">home</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="fakebuilding">
                <Link to="/fakebuilding">
                  <Icon type="video-camera" />
                  <span>nav 2</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }}>
              <Icon
                className="trigger"
                type={collapsed ? "menu-unfold" : "menu-fold"}
                onClick={buttonClicked}
              />
            </Header>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}
            >
              <Switch>
                <Route exact path="/">
                  <FakeHome />
                </Route>
                <Route path="/fakebuilding">
                  <FakeBuilding />
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </Layout>
  );
};

export default AntDSiderTest;
