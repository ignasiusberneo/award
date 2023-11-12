import { Button, Checkbox, Form, Input, Layout, Menu, Pagination } from "antd";
import CardList from "../components/CardList";
import { Flex } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import FilterModal from "../components/FilterModal";
import Swal from "sweetalert2";

export default function FeedPage() {
  const [data, setData] = useState([]);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [totalPage, setTotalPage] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const getData = async (payload) => {
    try {
      const access_token = localStorage.getItem("access_token");
      const response = await axios.get("http://localhost:3001/awards", {
        headers: { access_token },
        params: { ...payload, page: currentPage },
      });
      setData(response.data.data);
      setTotalPage(response.data.totalPage);
      setTotalData(response.data.totalData);
      if (response.data.data.length < 1) {
        Swal.fire({
          text: "No Awards Found",
          icon: "error",
        });
      }
    } catch (error) {
      navigate("/signin");
    }
  };

  const handleFilter = async (payload) => {
    try {
      setCurrentPage(1);
      getData(payload);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, [currentPage]);
  return (
    <>
      <FilterModal
        showFilterModal={showFilterModal}
        setShowFilterModal={setShowFilterModal}
        handleFilter={handleFilter}
      />
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <SideBar />
        <Flex
          vertical
          justify="center"
          style={{ paddingTop: "20px", width: "100%" }}
        >
          <div style={{ position: "fixed", top: 20, right: 20 }}>
            <Button size="small" onClick={() => setShowFilterModal(true)}>
              Filter
            </Button>
          </div>
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
