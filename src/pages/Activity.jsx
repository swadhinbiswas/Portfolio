import React from "react";
import Menu from "../components/Menu";
import GitHubStats from "../components/GithubStats";

// Assuming Menu is a separate component

// Replace with your preferred styling approach

const Activity = () => {
  const username = "swadhinbiswas";
  return (
    <div className="activity-container space-y-10">
      <header className="activity-header">
        <Menu />
      </header>

      <main className="activity-main">
        <h2>Coding Activity</h2>

        <section className="activity-sections">
          <div className="activity-section">
            <div>
              <img
                src="https://wakatime.com/share/@theprofessor/df77b7fe-359e-49aa-9316-47bf15cd5ae1.svg"
                alt="WakaTime coding activity"
              />
            </div>

            <div className="flex space-x-12">
              <div className="image-container h-80 w-80">
                <img
                  src="https://wakatime.com/share/@theprofessor/ccf55960-e4ab-47b6-9d58-b1e938c32749.svg"
                  alt="Most used languages"
                />
              </div>
              <div className="small-image-container h-80 w-80">
                <img
                  src="https://wakatime.com/share/@theprofessor/d1a9dbbe-f598-42a5-97b7-4dbb3e2b5bc4.svg"
                  alt="Most used languages"
                />
              </div>
            </div>
          </div>
          <div className="flex">
      {/* Other content */}
      <GitHubStats username={username} />
    </div>



        </section>
      </main>
    </div>
  );
};

export default Activity;
