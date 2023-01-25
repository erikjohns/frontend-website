import { Component } from "react"
import moment from "moment"

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
          title="Study Abroad Blog"
          metaDescription="Erik is studying abroad and sharing his experiences."
        />
        <Header />
        <div className="homepage-container">
          <div className="homepage-introduction">
            <h1>Hi, I'm Erik and I'm Studying Abroad</h1>
            <p>Sharing all of my thoughts and experiences from my Study Abroad Trip!</p>
          </div>
          {
            this.props.posts2 ?
            this.props.posts2.map((post, index) => {
              return (
                <a key={index} href={`/blog/${post.urlTitle}`} className="card_a">
                  <div className="card">
                    <img src={post.thumbnailImageUrl} className="card__image"/>
                    <div class="card__content">
                      <time datetime ={moment.unix(post.dateTimestamp).format("YYYY-MM-DD")} class="card__date">{moment.unix(post.dateTimestamp).format("MMMM D, YYYY")}</time>
                      <span className="card__title">{post.title}</span>
                    </div>
                  </div>
                </a>
              )
            }) : null
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
        </div>
        <Footer />
      </div>
    )
  }
}
