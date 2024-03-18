import { useState } from "react";
import { Modal, Input } from "antd";
import useFetch from "../../hooks/useFetch";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setVisible } from "../../store/reducer/modalSlice";

interface PropsType {
  visible: boolean;
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalComponent() {
  const dispatch = useAppDispatch();
  const { visible, title } = useAppSelector((state) => state.modalSlice);
  const [name, setName] = useState("");
  const { data, error, isLoading, fetchData } = useFetch("POST");

  const handleOk = () => {
    fetchData("http://localhost:3000/api/todo/create", {
      name,
    });
    dispatch(setVisible(false));
  };

  const handleCancel = () => {
    dispatch(setVisible(false));
  };
  return (
    <div>
      <Modal
        title={title}
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
