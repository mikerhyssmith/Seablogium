import { SitemapStream, streamToPromise } from 'sitemap'
import { getAllPostSlugs } from '../../lib/posts'

export default async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    })

    // List of posts
    const posts = getAllPostSlugs()

    // Create each URL row
    posts.forEach((post) => {
      smStream.write({
        url: `/${post}`,
        changefreq: 'daily',
        priority: 0.9,
      })
    })

    // End sitemap stream
    smStream.end()

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString()

    // Change headers
    res.writeHead(200, {
      'Content-Type': 'application/xml',
    })

    // Display output to user
    res.end(sitemapOutput)
  } catch (e) {
    console.log(e)
    res.send(JSON.stringify(e))
  }
}
