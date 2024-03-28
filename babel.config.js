const fs = require('fs');
const path = require('path');

module.exports = function (api) {
  api.cache(true);
  
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "inline-import", 
        {
          "extensions": [".sql"],
          "loaders": {
            ".sql": (source) => {
              const filePath = path.resolve(__dirname, source);
              const fileContent = fs.readFileSync(filePath, 'utf8');
              return `export default ${JSON.stringify(fileContent)};`;
            }
          }
        }
      ]
    ]
  };
};