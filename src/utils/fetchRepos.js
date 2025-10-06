const fetchRepos = async (abhayyrana) => {
  try {
    const response = await fetch(`https://api.github.com/users/${abhayyrana}/repos`);
    const data = await response.json();
    return data
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 9); // limit to top 9
  } catch (error) {
    console.error("Error fetching repos:", error);
    return [];
  }
};

export default fetchRepos;
