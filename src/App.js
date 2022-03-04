import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, FormControl } from "react-bootstrap";

import Headline from "./Lifecycle/News/Headline";

const App = () => {
  const [headline, setHeadline] = useState([]);
  const [find, setFindKey] = useState("");

  useEffect(() => {
    const getData = async () => {
      const get = await axios(
        "https://newsapi.org/v2/top-headlines?country=id&apiKey=2ce3391dc00c4c4395e8ba75f6384d25"
      );
      console.log(get.data.headline);
      setHeadline(get.data.headline);
    };
    getData();
  }, []);

  console.log(find);

  return (
    <div className="py-5">
      <Container>
        <FormControl
          className="mb-4"
          placeholder="Search"
          onChange={(e) => setFindKey(e.target.value)}
        />
        <Headline headline={headline} findKey={find} />
      </Container>
    </div>
  );
};

export default App;
