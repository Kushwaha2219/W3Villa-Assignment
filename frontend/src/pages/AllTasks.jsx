import React, { useState, useEffect } from "react";
import Cards from "../components/Home/Cards";
import axios from "axios";
import { IoAddCircleSharp } from "react-icons/io5";
import InputData from "../components/Home/InputData";
import Loader from "../components/Home/Loader";

const AllTasks = () => {
  const [InputDiv, setInputDiv] = useState("hidden");
  const [Data, setData] = useState(null);
  const [UpdatedData, setUpdatedData] = useState({
    id: "",
    title: "",
    desc: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://todo-xx87.onrender.com/api/v2/get-all-todos",
          { headers }
        );
        setData(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (localStorage.getItem("id") && localStorage.getItem("token")) {
      fetchData();
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-gray-100">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-red-400">
        <p className="text-xl font-semibold">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-100">All Tasks</h1>
        <button
          onClick={() => setInputDiv("fixed")}
          className="flex items-center gap-2 text-gray-400 hover:text-gray-100 transition duration-300"
        >
          <IoAddCircleSharp className="text-5xl" />
        </button>
      </div>
      <hr />
      {Data && (
        <Cards
          home={"true"}
          setInputDiv={setInputDiv}
          data={Data.todos}
          setUpdatedData={setUpdatedData}
        />
      )}

      <InputData
        InputDiv={InputDiv}
        setInputDiv={setInputDiv}
        UpdatedData={UpdatedData}
        setUpdatedData={setUpdatedData}
      />
    </div>
  );
};

export default AllTasks;
