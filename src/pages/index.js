import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Coming soon...</h1>
    <h3>Contact</h3>
    <p><a href="https://github.com/DanielAndrePB">GitHub</a></p>
    <p><a href="https://www.linkedin.com/in/danielpantojab/">LinkedIn</a></p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/*<Image />*/}
    </div>
    {/*<Link to="/page-2/">Go to page 2</Link> <br />*/}
    {/*<Link to="/using-typescript/">Go to "Using TypeScript"</Link>*/}

  </Layout>
)

export default IndexPage
