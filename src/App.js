import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://api-v2.elchocrud.pro/api/v1/d07357c37ef285f5b347c48cd0d4686a/product"
      );
      console.log(data);
      setData(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const postData = async () => {
    try {
      const { data } = await axios.post(
        "https://api-v2.elchocrud.pro/api/v1/d07357c37ef285f5b347c48cd0d4686a/product",
        { name: value }
      );
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {data.map((el) => {
            <h1>{el.name}</h1>;
          })}
        </div>
      )}
      <div>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button onClick={postData}>post</button>
      </div>
    </div>
  );
};

export default App;
