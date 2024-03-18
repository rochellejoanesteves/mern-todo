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
  const { fetchData } = useFetch("DELETE");

  const handleEdit = (item: Duty) => {
    dispatch(setVisible(true));
    dispatch(setTitle("Update Todo"));
    dispatch(setActiveTodo(item));
  };
  const handleDelete = async (id: string) => {
    await fetchData(`http://localhost:3000/api/todo/deleteTodo/${id}`)

  };
  return (
    <div className="cardContainer">
      {data.map((todo: Duty) => (
        <Card key={todo._id} className="card">
          <div key={todo._id} className="title">
            <p>{todo.name}</p>
          </div>
          <div className="actions">
            <EditOutlined onClick={() => handleEdit(todo)} />
            <DeleteOutlined onClick={() => handleDelete(todo._id)} />
          </div>
        </Card>
      ))}
      <ModalComponent />
    </div>
  );
}
