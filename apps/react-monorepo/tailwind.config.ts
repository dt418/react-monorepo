import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import { join } from 'path';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
