import React, { useState } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Icon } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

import FakeBuilding from "./fakeBuilding";
import FakeHome from "./fakeHome";

const { Header, Content, Sider } = Layout;

const AntDSiderTest = withRouter(props => {
  const [collapsed, setCollapsed] = useState(false);

  const buttonClicked = () => {
    setCollapsed(!collapsed);
  };

  let { location } = props;

  React.useEffect(() => {
    console.log("location changed");
    //console.log(["pageview", location.pathname]);
  }, [location]);

  const getLocation = () => {
    console.log("we want to get location" + location.pathname);
  };

  const MenuItemClickend = e => {
    location = props.location.pathname;
    alert(location);
    //console.log("event bubbled up to sider" + location.pathname);
  };

  return (
    <Layout>
      {/* <Router> */}
      <Layout>
        <button onClick={getLocation}>Get Location?</button>

        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          onClick={MenuItemClickend}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
            <Menu.Item key="/">
              <Link to="/">
                <Icon type="user" />
                <span key="1">home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/fakebuilding">
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
      {/* </Router> */}
    </Layout>
  );
});

export default AntDSiderTest;
