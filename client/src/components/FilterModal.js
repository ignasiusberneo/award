import { Button, Checkbox, Flex, Form, Input, InputNumber, Modal } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";

export default function FilterModal({
  showFilterModal,
  setShowFilterModal,
  handleFilter,
}) {
  const defaultCheckedList = [];
  const options = ["Giftcards", "Products", "Vouchers"];
  const [minPoint, setMinPoint] = useState("");
  const [maxPoint, setMaxPoint] = useState("");
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const checkAll = options.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < options.length;
  const onChange = (list) => {
    setCheckedList(list);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? options : []);
  };
  const handleClearFilter = () => {
    setCheckedList([]);
    setMaxPoint("");
    setMinPoint("");
  };
  const handleSubmitFilter = () => {
    const payload = {
      minPoint,
      maxPoint,
      category: checkedList.join(","),
    };
    handleFilter(payload);
    setShowFilterModal(false);
  };
  return (
    <Modal
      title="Filter"
      open={showFilterModal}
      onCancel={() => setShowFilterModal(false)}
      footer={[
        <Button key="back" onClick={handleClearFilter}>
          Clear Filter
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmitFilter}>
          Filter
        </Button>,
      ]}
      //   onCancel={() => setShowFilterModal(false)}
    >
      <Form name="basic" layout="vertical">
        <h5>Poin Needed</h5>
        <Flex gap={100}>
          <Form.Item label="Minimum">
            <Input
              value={minPoint}
              onChange={(e) => setMinPoint(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Maximum">
            <Input
              value={maxPoint}
              onChange={(e) => setMaxPoint(e.target.value)}
            />
          </Form.Item>
        </Flex>
      </Form>
      <h5>Awards Type</h5>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        All Type
      </Checkbox>
      <Checkbox.Group
        style={{ display: "flex", flexDirection: "column" }}
        options={options}
        value={checkedList}
        onChange={onChange}
      />
    </Modal>
  );
}
