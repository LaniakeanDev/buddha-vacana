import path from 'path';
import { readFileSync } from 'fs';

export function getSuttaData(nikaya: string, level1: string, level2: string | undefined): ISuttaData | null {
  const suttaPath = level2
    ? path.join(
        // Safely combines path segments (handles OS-specific slashes)
        process.cwd(), // Returns the current working directory (project root).
        '/public/data',
        nikaya,
        level1, // level1 is a book
        `${level2}.json`, // level 2 is a suttaId
      )
    : path.join(
        process.cwd(),
        '/public/data',
        nikaya,
        `${level1}.json`, // level 1 is a suttaId
      );

  try {
    const suttaFileContents = readFileSync(suttaPath, 'utf8');
    return JSON.parse(suttaFileContents);
  } catch (error) {
    // console.log({error});
    return null;
  }
}
