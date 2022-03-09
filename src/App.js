import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  FormControl,
  Section,
  Nav,
  Form,
  Span,
} from "react-bootstrap";

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
    <div className="pt-5">
      <Nav className="navbar navbar-light bg-light">
        <Form className="container">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Cari Berita"
              aria-label="Search"
              onChange={(e) => setFindKey(e.target.value)}
            />
            <Headline headline={headline} find={find} />
          </div>
        </Form>
        <div className="row mt-5" id="card-container"></div>
      </Nav>
    </div>
  );
};

export default App;
