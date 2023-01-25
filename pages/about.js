import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"

export default class extends Component {
  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetadata
          title="About Me | Coding Blog"
          metaDescription="Nick Major is a full stack software developer that also writes about modern NodeJS and JavaScript."
        />
        <Header />
        <div className="about-container">
          <div className="about-section">
            <h1>About Me</h1>
            <p>I’m Erik, a student who is studying abroad.</p>
          </div>
          <div className="about-section">
            <h2>Insert Info</h2>
          </div>
          <div className="about-section">
            <h2>Insert Info</h2>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}