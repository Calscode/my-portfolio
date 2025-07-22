import React from 'react';
import GitHubCalendar from 'react-github-calendar';

export default function MyGitHubCalendar() {
  return (
    <div>
      <h2>My GitHub Contributions</h2>
      <GitHubCalendar username="calscode" />
    </div>
  );
}