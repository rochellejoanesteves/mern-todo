import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { setTitle, setVisible } from "../../store/reducer/modalSlice";
import { setData } from "../../store/reducer/todoSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { PlusCircleOutlined } from "@ant-design/icons";
import ModalComponent from "../../components/modal";
import Todo from "../../components/todo";
import "./home.scss";

export default function Home() {
  const dispatch = useAppDispatch();
  const { visible } = useAppSelector((state) => state.modalSlice);

  const { data, error, isLoading, fetchData } = useFetch("GET");
  
  useEffect(() => {
    fetchData("http://localhost:3000/api/todo/getTodos");
  }, [visible]);

  useEffect(() => {
    if (!isLoading && data.length > 0 && !error) {
      dispatch(setData(data));
    }
  }, [data, isLoading, error]);

  const handleOpen = () => {
    dispatch(setVisible(true));
    dispatch(setTitle("Add Todo"));
  };
   
  if (isLoading) {
    return <h1>Loading ....</h1>;
  }
  return (
    <div className="home">
      <div className="icon">
        <h3>Add Todo</h3>
        <PlusCircleOutlined
          onClick={handleOpen}
        />
      </div>
      <div>
        <Todo data={data} />
      </div>

      <ModalComponent />
    </div>
  );
}
