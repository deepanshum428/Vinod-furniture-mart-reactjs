import React, { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./Github.css";

function Github() {
  const data = useLoaderData();

  //   const [data, setData] = useState(0);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data, count);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="github-main-div ">
      Github follower: {data.followers}
      <img
        className="github-img"
        src={data.avatar_url}
        width={200}
        height={200}
        alt="image"
      />
      <p className="github-paragraph">Hitesh sir</p>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");

  return response.json();
};
