import { useState } from "react";
import { Duty } from "../dto/duty";

type FetchFunctionTypes = (url: string, body?: unknown) => Promise<void>;

type Methods = "POST" | "GET" | "DELETE" | "PUT";

interface ReturnType {
  data: Duty[];
  error: string | null;
  isLoading: boolean;
  fetchData: FetchFunctionTypes;
}

export default function useFetch(method: Methods): ReturnType {
  const [data, setData] = useState<Duty[]>([{
    _id: "",
    name: ""
  }]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData: FetchFunctionTypes = async (url: string, body?: unknown) => {
    setIsLoading(true);
    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const jsonData: Duty[] = await res.json();

      setData(jsonData);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    error,
    isLoading,
    fetchData,
  };
}
