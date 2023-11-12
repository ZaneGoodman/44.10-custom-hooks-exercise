import React, { useState, useEffect } from "react";
import axios from "axios";
import uuid from "uuid";

const useFlip = (url) => {
  const [state, setState] = useState([]);

  const makeRequest = async () => {
    const response = await axios.get(url);
    setState((state) => [...state, { ...response.data, id: uuid() }]);
  };

  return [state, makeRequest];
};
export default useFlip;
