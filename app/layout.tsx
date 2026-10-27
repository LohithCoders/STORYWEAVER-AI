import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'StoryWeaver AI — Creative Writing Prompt Expander', description: 'Turn a small spark of an idea into a richly structured creative writing prompt. Explore a college project prototype.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
