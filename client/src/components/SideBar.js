import { Button, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Header } from "antd/es/layout/layout";
import { useState } from "react";
import star from "../assets/star.png";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const items = [
    {
      key: "Home",
      label: "Home",
    },
    {
      key: "Cards",
      label: "Cards",
    },
    {
      key: "Profile",
      label: "Profile",
    },
    { key: "Logout", label: "Logout" },
  ];
  const handleMenu = (menu) => {
    if (menu === "Home") {
      setIsCollapsed(true);
    }
    if (menu === "Logout") {
      localStorage.clear();
      navigate("/signin");
    }
  };
  return (
    <Sider
      collapsible
      collapsed={isCollapsed}
      onCollapse={(value) => setIsCollapsed(value)}
      theme="light"
      style={{
        paddingTop: "16px",
        position: "fixed",
        top: 0,
        minHeight: "100vh",
      }}
      trigger={null}
    >
      <Button
        type="text"
        icon={isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
      {!isCollapsed && (
        <>
          <div>
            <img src={star} width="100px" />
          </div>
          <h1>Awards Menu</h1>
          <Menu
            items={items}
            selectable={false}
            onClick={(e) => handleMenu(e.key)}
          />
        </>
      )}
    </Sider>
  );
}
