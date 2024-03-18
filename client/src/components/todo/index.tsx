import { Card } from "antd";
import { Duty } from "../../dto/duty";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "./todo.scss";
import useFetch from "../../hooks/useFetch";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setTitle, setVisible } from "../../store/reducer/modalSlice";
import ModalComponent from "../modal";
import { setActiveTodo } from "../../store/reducer/todoSlice";

export default function Todo({ data }: { data: Duty[] }) {

  const dispatch = useAppDispatch();
  // const visible = useAppSelector(state => state.modalSlice.visible);

  const handleEdit = (item: Duty) => {
    dispatch(setVisible(true))
    dispatch(setTitle("Update Todo"))
    dispatch(setActiveTodo(item))
  }
  const handleDelete = () => {};
  return (
    <div className="cardContainer">
      {data.map((todo: Duty) => (
        <Card key={todo._id} className="card">
          <p key={todo._id}>{todo.name}</p>
          <div>
            <EditOutlined onClick={() => handleEdit(todo)} />
            <DeleteOutlined onClick={handleDelete} />
          </div>
        </Card>
      ))}
      <ModalComponent />
    </div>
  );
}
