export interface Build {
  id: string;
  title: string;
  description: string;
  status: string;
  tags: string[];
  demo_url: string;
  source_url: string;
  image: string;
  author: string;
}

export interface FeaturedBuild {
  id: string;
  title: string;
  subtitle: string;
  video_url: string;
  description: string;
  primary_cta: { label: string; url: string };
  secondary_cta: { label: string; url: string };
}

export interface BuildsData {
  featured: FeaturedBuild;
  builds: Build[];
}
