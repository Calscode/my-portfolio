import React from "react";
import MyGitHubCalendar from "../Components/github-cont"; 

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome! 🤝 Bienvenue! ✌️🫡 </h1>
        <h2>This is the home page of my personal site, let me show you a bit about me! 🚀🌍 </h2>

        <p>Firstly, thank you for visiting my page. I thought this would be a relevant way to introduce myself given the nature of the skillset I am aiming to showcase. <br/>
        Since stepping into the tech space from a recruitment perspective I quickly became fascinated with the possiblities from a technical perspective, so several years later and here I am.. <br/>

        One Udemy course to kickstart everything and then studying with Northcoders to top it all off ! 🍒 <br/>
        <br/>

        Anyway, please find below my github contributions (many more to come) and below that a summary of key events:
        </p>

        <MyGitHubCalendar />

        <hr/>

        <h2>Summary of Key Professional Events</h2>

<ul>
        <li><h4>Northcoders - Software Development Graduate - Finished in June 2025</h4></li>
        <li><h4>Housing Advisor / Change Management - Lambeth Council - 02/2024 - Present</h4></li>
        <li><h4>Executive Recruitment Consultant & Operational Development - Verrus Group - 06/2022  - 02/2024</h4></li>
        <li><h4>COVID-19 Case Handler - Lambeth Council - 10/2020 - 06/2022</h4></li>
        <li><h4>Senior 360 Tech Recruiter - MAM Business Intelligence (MAM Gruppe) - 11/2018 - 10/2020</h4></li>
        <li><h4>Sales Roles in Various Companies - 2016 - 2018</h4></li>
        <li><h4>Hospitality in various companies - 2009 - 2017</h4></li>
</ul>
      </div>
    </div>
  );
}