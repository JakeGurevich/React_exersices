import React, { useEffect, useState } from "react";
import axios from "axios";
import Spiner from "./Spiner";
import Display from "./Display";

const Fetch = () => {
  const [term, setTerm] = useState("react");
  const [result, setResult] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [spiner, setSpiner] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const search = async () => {
      setSpiner(true);

      const res = await axios
        .get(`https://hn.algolia.com/api/v1/search?query=${term}`, {
          cancelToken: source.token,
        })
        .catch(function (thrown) {
          if (axios.isCancel(thrown)) {
            console.log("Request canceled", thrown.message);
          } else {
            // handle error
          }
        });

      const { hits } = res ? res.data : "";
      setSpiner(false);
      console.log(hits);

      setResult(hits);
    };

    search();
    return () => {
      console.log("hi fom cleaning ");
      source.cancel("Operation canceled by the user.");
    };
  }, [submit]);

  return (
    <React.Fragment>
      <label>Countries :</label>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      ></input>
      <button onClick={() => setSubmit(true)}>Submit</button>
      <button onClick={() => setShow(!show)}>Show or not</button>
      {spiner && <Spiner />}
      <div className="wrap">
        {result.map((c) => {
          return (
            <a key={c.title} href={c.url}>
              {c.title}
            </a>
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default Fetch;
