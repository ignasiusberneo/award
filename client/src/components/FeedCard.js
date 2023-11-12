import { Flex, Typography } from "antd";
import { useEffect } from "react";
const { Text } = Typography;

export default function FeedCard({ data }) {
  const styles = {
    tag: {
      position: "absolute",
      borderRadius: "3px",
      padding: "4px",
      color: "#fff",
      backgroundColor:
        data.category === "Vouchers"
          ? "#40a9ff"
          : data.category === "Giftcard"
          ? "red"
          : "green",
      right: "20px",
    },
    label: {
      position: "absolute",
      color: "black",
      bottom: "20px",
    },
    container: {
      boxShadow: "rgba(20, 42, 91, 0.08) 0px 2px 4px",
      border: "1px solid black",
      width: "450px",
      height: "250px",
      padding: "16px",
      position: "relative",
      borderRadius: "10px",
      backgroundColor: "#b4b4b3",
    },
  };
  return (
    <Flex
      gap={"small"}
      justify="flex-start"
      align="center"
      vertical
      style={{
        width: "100%",
        padding: "20px",
      }}
    >
      <div style={styles.container}>
        <div style={styles.tag}>{data.category}</div>
        <div style={styles.label}>{data.point} Poin</div>
      </div>
      <Text strong>{data.title}</Text>
    </Flex>
  );
}
