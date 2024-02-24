// relay.config.js
module.exports = {
  src: "./src",
  language: "flow",
  schema: "./schema.graphql",
  excludes: ["**/node_modules/**", "**/__generated__/**"],
  artifactDirectory: "./src/__generated__",
}
