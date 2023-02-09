import { Component } from "react"
import moment from "moment"

import Header from "../../components/header.js"
import Footer from "../../components/footer.js"
import HeadMetadata from "../../components/headMetadata.js"

import getAllBlogPosts from "../../api/getAllBlogPosts.js"

export default class extends Component {
  static async getInitialProps () {
    const apiResult = await getAllBlogPosts()

    return {
      posts: apiResult && apiResult.posts,
      getDataError: apiResult && apiResult.getDataError
    }
  }

  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetadata
          title="Blog Posts | Coding Blog"
          metaDescription="List of all blog posts published on the Nick Major coding blog."
        />
        <Header />
        <div className="blog-posts-container">
          <h1>Blog posts</h1>
          <div className="blog-posts-list">
            {
              this.props.posts && !this.props.getDataError ?
              this.props.posts.map((post, index) => {
                return (
                  <a key={index} href={`/blog/${post.urlTitle}`}>
                    <div className="blogCard">
                      <div class="card__header">
                        <img src={post.thumbnailImageUrl} alt="blog__image" className="blog__image" width="600" height="400"/>
                      </div>
                      <div class="card__body">
                        <span class="tag tag-blue">{moment.unix(post.dateTimestamp).format("MMMM D, YYYY")}</span>
                        <h4>{post.title}</h4>
                        <p>{post.metaDescription}</p>
                      </div>
                    </div>
                  </a>
                )
              }) :
              <div className="blog-posts-get-data-error-msg">
                <span>An error occurred.</span>
              </div>
            }
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}