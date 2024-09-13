/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.mcgill-esports.com/",
  generateRobotsTxt: true,
  outDir: "public",
};
