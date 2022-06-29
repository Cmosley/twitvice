import React from "react";
import { useEffect, useState } from "react";

const GetBookMarks = () => {
  const { myBookMarks, setBookMarks} = useState(null);
  const TOKEN = process.env.REACT_APP_BEARER_TOKEN;
  
  async function fetchBookMarks() {
    await fetch("https://api.twitter.com/2/users/29078239/bookmarks?  max_results=20", {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
    });
  }

  return (
    <button onClick={() => fetchBookMarks()}>Get BookMarks</button>
  )
}

export default GetBookMarks;