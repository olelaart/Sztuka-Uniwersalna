import * as React from 'react';

export const component = (config) => {
  const code = Object.keys(config.includes)
    .map(key => `const ${key} = config.includes.${key};`)
    .join('\n');

  eval(code);

  return <div>%WRAPPED%</div>;
};

