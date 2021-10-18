module.exports = {
  siteMetadata: {
    author: "hhimanshu",
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby-svg",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/
        }
      }
    }
  ],
};
