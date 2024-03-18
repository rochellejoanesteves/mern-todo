import { PlusCircleOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import { useEffect, useState } from "react";
import ModalComponent from "../../components/modal";
import Todo from "../../components/todo";
import useFetch from "../../hooks/useFetch";
import "./home.scss";

const { Search } = Input;

export default function Home() {
  //   const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, error, isLoading, fetchData } = useFetch("GET");

  useEffect(() => {
    fetchData("http://localhost:3000/api/todo/getTodos");
  }, []);

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div className="home">
      <div className="search">
        <Space direction="vertical">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
        </Space>
      </div>
      <div>
        <Todo data={data} />
      </div>
      <div className="icon">
        <PlusCircleOutlined
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      <ModalComponent setVisible={setIsModalOpen} visible={isModalOpen} />
    </div>
  );
}
