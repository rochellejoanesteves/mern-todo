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
  const { _id, name: activeName} = useAppSelector(state => state.todoSlice.activeTodo)
  const [name, setName] = useState<string>("");
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const { data, error, isLoading, fetchData } = useFetch("POST");

  console.log(error)

  const handleOk = () => {
    fetchData("http://localhost:3000/api/todo/create", {
      name,
    });
    dispatch(setVisible(false));
  };

  const handleUpdate = () => {
    fetchData(`http://localhost:3000/api/todo/updateTodo/${_id}`, {
      name
    })
    dispatch(setVisible(false));
  }


  const handleCancel = () => {
    dispatch(setVisible(false));
  };
  return (
    <div>
      <Modal
        title={title}
        open={visible}
        onOk={title === "Update Todo" ? handleUpdate : handleOk}
        onCancel={handleCancel}
        okText="Save"
      >
        <Input
          placeholder="Enter your todo here..."
          value={title === "Update Todo" && !isFocus ? activeName : name}
          onFocus={() => setIsFocus(true)}
          onChange={(e) => setName(e.target.value)}
        />
      </Modal>
    </div>
  );
}
