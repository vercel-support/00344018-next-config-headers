/**
* @type {import('next').NextConfig}
*/

const contentHeaderPlugin = (nextConfig = {}) => {
  console.log("Setting headers for apple-app-site-association 1");
  return Object.assign({}, nextConfig, {
    async headers() {
      console.log("Setting headers for apple-app-site-association 3");
      return [
        {
          source: "/.well-known/apple-app-site-association",
          headers: [
            {
              key: "Content-Type",
              value: "application/json",
            },
          ],
        },
      ];
    },
  });
};

module.exports = contentHeaderPlugin;