import { Card } from "antd";
import { Duty } from "../../dto/duty";
import "./todo.scss";

export default function Todo({ data }: { data: Duty[] }) {
  return (
    <div className="card">
      {data.map((todo: Duty) => (
        <Card key={todo._id} style={{ width: 400, margin: "15px" }}>
          <p key={todo._id}>{todo.name}</p>
        </Card>
      ))}
    </div>
  );
}
