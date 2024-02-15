import React, { useEffect, useState } from "react";

function FetchUseEffect({ userId }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
      setPosts(data);
    };
    fetchData();
  }, [userId]);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //     })
  //     .then((data) => {
  //       setPosts(data);
  //     });
  // }, [userId]);

  return (
    <div className="container">
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}

      {/* <label>Enter the UserID: </label>
      <input placeholder="write user ID" type="number" value={id} /> */}
    </div>
  );
}

export default FetchUseEffect;
