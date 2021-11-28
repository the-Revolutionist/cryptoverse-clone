import "../App.css";

import { Avatar, Button, Menu, Typography } from "antd";
import {
  BulbOutlined,
  FundOutlined,
  HomeOutlined,
  MenuOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";
import icon from "../images/cryptocurrency.png";

export const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        <Button className="menu-control-container">Button</Button>
      </div>

      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />} key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />} key="crypto">
          <Link to="/cryptocurrencies ">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />} key="exchanges">
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />} key="news">
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};
