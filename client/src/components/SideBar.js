import { Button, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Header } from "antd/es/layout/layout";
import { useState } from "react";
import star from "../assets/star.png";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
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
    { key: "Sign Out", label: "Sign Out" },
  ];
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
            onClick={(e) => console.log(e)}
          />
        </>
      )}
    </Sider>
  );
}
