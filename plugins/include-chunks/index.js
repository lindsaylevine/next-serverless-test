const fs = require("fs")
const path = require("path")
const AdmZip = require("adm-zip")
const cpy = require("cpy")
// const config = require("../../next.config.js")

module.exports = {
  onBuild: async ({ constants: { FUNCTIONS_DIST } }) => {
    const chunks = fs.readdirSync("./.next/serverless");
    console.log('CHUNKS', typeof chunks)
    Object.keys(chunks).forEach(async (i) => {
      const chunk = chunks[i]
      console.log('????', FUNCTIONS_DIST)
      await cpy(path.join('.', '.next/serverless', chunk), path.join(FUNCTIONS_DIST, chunk), { dot: true })
      // const zipName = path.join(FUNCTIONS_DIST, chunk + ".zip")
      // const zip = new AdmZip(zipName)
      // const chunkPath = path.join('.', '.next/serverless', chunk)
      // zip.addLocalFile(chunk, chunk)
      // zip.writeZip(zipName)
    });
  }
}
