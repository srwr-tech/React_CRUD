import React from "react";
import backgroundImage from "../../images/back.jpg"; // Import your background image

function Home() {
  const link = "https://github.com/srwr-tech";
  const target = "_blank";

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "flex-start", // Align content to the left side
    color: "#fff",
    paddingLeft: "90px", // Add left padding for better readability
  };

  
//   const containerStyle = {
// 	backgroundColor: "black", // Semi-transparent black background
// 	backgroundImage: `url(${backgroundImage})`,
// 	backgroundSize: "cover",
// 	backgroundPosition: "center",
// 	backgroundRepeat: "no-repeat",
// 	minHeight: "100vh",
// 	display: "flex",
// 	flexDirection: "column",
// 	justifyContent: "center",
// 	alignItems: "center",
// 	color: "black",
//   };

  return (
    <div style={containerStyle}>
      <h1>MERN Stack Crud</h1>
      <p>
        <b>Front-end</b>: React.js
      </p>
      <p>
        <b>Back-end</b>: Node.js, Express.js
      </p>
      <p>
        <b>Database</b>: MongoDB Atlas with Mongoose ODM
      </p>
      <p>
        <b>Developed By</b>: Sarwer Alam
        <p>
          <a href={link} target={target}>
            Sarwer
          </a>
        </p>
      </p>
    </div>
  );
}

export default Home;
