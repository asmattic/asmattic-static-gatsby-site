module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  siteTitle: "Gatsby Material Starter", // Site title.
  siteTitleAlt: "Asmattic Docs", // Alternative site title for SEO.
  siteLogo: "/logos/asmattic-favicon.png", // Logo used for SEO and manifest.
  siteUrl: "https://asmattic.com", // Domain of your website without pathPrefix.
  pathPrefix: "/asmattic-static-gatsby-site", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "A general collection of things I've wanted to remember at one point or another.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "UA-43808039-1", // Tracking code ID for google analytics.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Matthew Oldfield", // Username to display in the author segment.
  userTwitter: "https://twitter.com/MattOldfield2", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Tampa, Florida", // User location to display in the author segment.
  userAvatar: "/logos/profile-pic.png", // User avatar to display in the author segment.
  userDescription:
    "Some type of description.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/asmattic",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/MattOldfield2",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:mattoldfieldweb@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. Matthew Oldfield" // Copyright string for the footer of the website and RSS feed.
};
