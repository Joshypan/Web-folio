import React, { useEffect, useState } from 'react';

const GitHubFeed = ({ username }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(repo => !repo.fork);
        setRepos(filtered);
      })
      .catch((error) => console.error('Error fetching repos:', error));
  }, [username]);

  return (
    <div className="github-feed container mt-4">
      {repos.length > 0 ? (
        <ul className="list-unstyled">
          {repos.map((repo) => (
            <li key={repo.id} className="mb-3 p-3 border rounded shadow-sm">
              <h5><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h5>
              <p className="mb-1">{repo.description || 'No description provided.'}</p>
              <small className="text-muted">⭐ {repo.stargazers_count} | Updated {new Date(repo.updated_at).toLocaleDateString()}</small>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading GitHub repositories...</p>
      )}
    </div>
  );
};

export default GitHubFeed;
