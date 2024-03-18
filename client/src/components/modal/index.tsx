import { useState } from "react";
import { Modal, Input } from "antd";
import useFetch from "../../hooks/useFetch";

interface PropsType {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalComponent({ visible, setVisible }: PropsType) {
  const [name, setName] = useState("");
  const { data, error, isLoading, fetchData } = useFetch("POST");

  const handleOk = () => {
    fetchData("http://localhost:3000/api/todo/create", {
        name
    })
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <div>
      <Modal
        title="Add Todo"
        open={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Save"
      >
        <Input
          placeholder="Enter your todo here..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Modal>
    </div>
  );
}
