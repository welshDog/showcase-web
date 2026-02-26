export interface Build {
  id: string;
  title: string;
  description: string;
  author: string;
  githubUrl: string;
  demoUrl: string;
  tags: string[];
  status?: 'live' | 'beta' | 'wip';
}
