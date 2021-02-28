const fs = require("fs")
const path = require("path")
const AdmZip = require("adm-zip")
const cpy = require("cpy")
const copyFile = require("cp-file")
// const config = require("../../next.config.js")

module.exports = {
  onPostBuild: async ({ constants: { FUNCTIONS_DIST } }) => {
    const chunks = fs.readdirSync("./.next/serverless");
    Object.keys(chunks).forEach(async (i) => {
      const chunk = chunks[i]
      // console.log('????', chunk, FUNCTIONS_DIST)
      // console.log(path.resolve(FUNCTIONS_DIST, chunk))
      // if (chunk.includes('header') || chunk.includes('footer')) {
      //   await copyFile(path.resolve('.', '.next/serverless', chunk), path.resolve(FUNCTIONS_DIST, chunk))
      // }
      const zipName = path.join(FUNCTIONS_DIST, "../", chunk + ".zip")
      const zip = new AdmZip(zipName)
      zip.addLocalFile(chunk, chunk)
      zip.writeZip(zipName)
    });
  }
}
