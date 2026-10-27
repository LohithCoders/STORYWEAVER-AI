import type { NextConfig } from 'next';
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true';
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  distDir: '.next-pages-build',
  ...(isGitHubPagesBuild ? { basePath: '/STORYWEAVER-AI' } : {}),
};
export default nextConfig;
