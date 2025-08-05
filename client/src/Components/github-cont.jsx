import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import Layout from './layout';

export default function MyGitHubCalendar() {
  return (
    <Layout>
    <div>
      <h2>My GitHub Contributions</h2>
      <GitHubCalendar username="calscode" />
    </div>
    </Layout>
  );
}