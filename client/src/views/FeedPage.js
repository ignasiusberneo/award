import { Button, Checkbox, Form, Input, Layout, Menu, Pagination } from "antd";
import CardList from "../components/CardList";
import { Flex } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";

export default function FeedPage() {
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      const response = await axios.get(
        `http://localhost:3001/awards?page=${currentPage}`,
        {
          headers: { access_token },
        }
      );
      setData(response.data.data);
      setTotalPage(response.data.totalPage);
      setTotalData(response.data.totalData);
    } catch (error) {
      navigate("/signin");
    }
  };

  useEffect(() => {
    getData();
  }, [currentPage]);
  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <SideBar />
        <Flex
          vertical
          justify="center"
          style={{ paddingTop: "20px", width: "100vw" }}
        >
          <CardList data={data} />
          <Pagination
            defaultPageSize={5}
            total={totalData}
            current={currentPage}
            onChange={(e) => setCurrentPage(e)}
          />
        </Flex>
      </Layout>
    </>
  );
}
