import React from 'react';

const GitHubStats = ({ username }) => {
  return (
    <div className="github-stats-container flex">
      <a href={`https://github-readme-streak-stats.herokuapp.com?user=${username}`}>
        <img
          src={`https://github-readme-streak-stats.herokuapp.com?user=${username}&theme=transparent&hide_border=true&border_radius=4.4&card_width=454`}
          alt="GitHub Streak"
        />
      </a>
      <a href={`https://github.com/${username}`}>
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&bg_color=00000000&hide_border=true`}
          alt="Swadhin's GitHub stats"
        />
      </a>
    </div>
  );
};

export default GitHubStats;