import React from "react";
import { useState } from "react";
import axios from "axios";

const GetBookMarks = () => {
  const { myBookMarks, setBookMarks} = useState(null);

  const TOKEN = process.env.REACT_APP_BEARER_TOKEN;
  
  let config = {
    method: "get",
    url: "https://api.twitter.com/2/users/29078239/bookmarks",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  async function fetchBookMarks() {
    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });  
  }

  return (
    <>
      <button onClick={() => fetchBookMarks()}>Get BookMarks</button>
      <div>{JSON.stringify(myBookMarks)}</div>
    </>
  )
}

export default GetBookMarks;