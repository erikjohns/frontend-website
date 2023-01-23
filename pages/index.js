import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"

import getFiveNewestPosts from "../api/getFiveNewestPosts.js"
import post from "../../rest-api/models/post.js"
import getNewestPost from "../api/getNewestPost.js"

export default class extends Component {
  static async getInitialProps () {
    const apiResult = await getFiveNewestPosts()
    const apiResult2 = await getNewestPost()

    return {
      posts2: apiResult2 && apiResult2.posts,
      posts: apiResult && apiResult.posts
    }
  }

  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetadata
          title="Coding Blog"
          metaDescription="Nick Major is a full stack software developer that also writes about modern NodeJS and JavaScript."
        />
        <Header />
        <div className="homepage-container">
          <div className="homepage-introduction">
            <h1>Hi, I'm Nick Major. I help people learn software development.</h1>
            <p>I'm a full stack software developer that writes about modern Node.js, JavaScript, and development.</p>
          </div>
          {
            this.props.posts2 ?
            this.props.posts2.map((post, index) => {
              return (
                <a key={index} href={`/blog/${post.urlTitle}`}>
                  <div className="card">
                    <img src={post.thumbnailImageUrl} className="card__image"/>
                    <div class="card__content">
                      <time datetime="" className="card__date">{post.dateTimestamp}</time>
                      <span class="card__title">{post.urlTitle}</span>
                    </div>
                  </div>
                </a>
              )
            }) : <h1>Error</h1>
          }
          <div className="homepage-latest-blog-posts">
            <h2>
              Latest Blog Posts
              <a className="homepage-latest-blog-posts-view-all" href="/blog">View all</a>
            </h2>
            <div className="homepage-latest-blog-posts-list">
              {
                this.props.posts ?
                this.props.posts.map((post, index) => {
                  return (
                    <a key={index} href={`/blog/${post.urlTitle}`}>
                      <div className="homepage-latest-blog-post">
                        <div className="homepage-latest-thumbnail">
                          <img src={post.thumbnailImageUrl} />
                        </div>
                        <div className="homepage-latest-blog-post-title">
                          <h3>{post.title}</h3>
                        </div>
                      </div>
                    </a>
                  )
                }) : null
              }
            </div>
          </div>
          <div className="homepage-projects">
            <h2>My Projects</h2>
            <div className="homepage-projects-list">
              <div className="homepage-project">
                <h3>
                  <a href="https://github.com/discourse/discourse">
                    <div className="homepage-project-icon">📞</div>
                    <div className="homepage-project-title">Discourse</div>
                  </a>
                </h3>
                <p>A platform for community discussion. Free, open, simple.</p>
                <div className="homepage-project-btns">
                  <a className="homepage-project-view-btn" href="https://github.com/discourse/discourse">View</a>
                </div>
              </div>
              <div className="homepage-project">
                <h3>
                  <a href="https://github.com/nmajor25/seconds-converter">
                    <div className="homepage-project-icon">⌛</div>
                    <div className="homepage-project-title">Seconds Converter</div>
                  </a>
                </h3>
                <p>Convert milliseconds or seconds to days, hours, minutes, and seconds in node.js.</p>
                <div className="homepage-project-btns">
                  <a className="homepage-project-view-btn" href="https://github.com/nmajor25/seconds-converter">View</a>
                </div>
              </div>
              <div className="homepage-project">
                <h3>
                  <a href="https://github.com/showdownjs/showdown">
                    <div className="homepage-project-icon">⌛</div>
                    <div className="homepage-project-title">Showdown</div>
                  </a>
                </h3>
                <p>A bidirectional Markdown to HTML to Markdown converter written in Javascript.</p>
                <div className="homepage-project-btns">
                  <a className="homepage-project-view-btn" href="https://github.com/showdownjs/showdown">View</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}