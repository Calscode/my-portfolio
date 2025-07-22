import React from "react";
import MyGitHubCalendar from "../../Components/github-cont"; 

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>This is the home page of my personal site, built with React and Node.js.</p>
        <MyGitHubCalendar />
      </div>
    </div>
  );
}