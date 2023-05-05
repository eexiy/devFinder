export type LocalGithubUser = {
  login: string;
  avatar: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter: string;
  repos: number;
  following: number;
  followers: number;
  created: string;
  updated: string;
};

export type GithubUser = {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  following: number;
  followers: number;
  created_at: string;
  updated_at: string;
};

export type GithubError = {
  message: string;
  documentation_url: string;
};
