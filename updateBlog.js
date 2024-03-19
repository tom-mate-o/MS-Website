const axios = require('axios');
const xml2js = require('xml2js');
const fs = require('fs');

async function updateBlog() {
  try {
    const response = await axios.get(
      'https://miriamsterl.netlify.app/blog/rss.xml'
    );
    const result = await xml2js.parseStringPromise(response.data);
    const blogPosts = result.rss.channel[0].item;
    const jsContent = `export const blogPosts = ${JSON.stringify(
      blogPosts,
      null,
      2
    )};`;
    fs.writeFileSync('src/blogPosts.js', jsContent);
  } catch (error) {
    console.error(error);
  }
}

updateBlog();
