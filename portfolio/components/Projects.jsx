"use client";

import { useState, useEffect } from "react";
import { AiOutlineBook } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";

const Projects = () => {
  const [reposData, setReposData] = useState([]);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/avvicky/repos",
          {
            headers: {
              Authorization:
                "Bearer "+process.env.GITHUB_TOKEN,
            },
          }
        );
        const data = await response.json();
        const requiredRepoNames = [
          "Promptopia",
          "gym-app",
          "Todo-List",
          "OAuth",
          "Blog",
          "amazon-clone",
        ];
        const filterArray = data.filter((item) =>
          requiredRepoNames.includes(item.name)
        );
        setReposData(filterArray);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchGitHubStats();
  }, []);

  return (
    <div id="projects" className="projects-section">
      <h1 className="projects">Projects</h1>
      <div className="cards-container">
        {reposData.map((item) => (
          <div
            className="projects-card"
            key={item.id}
            onClick={() => {
              window.open(item.html_url, "_blank");
            }}
          >
            <div className="project-title">
              <AiOutlineBook />
              <p className="project-title">{item.name}</p>
            </div>
            <p className="project-desc">{item.description}</p>
            <div className="project-info">
              <BsCircleFill color="yellow" />
              <p className="used-language">{item.language}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
