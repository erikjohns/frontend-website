import { Component } from "react"

export default class extends Component {
  render () {
    return (
      <footer className="footer-wrapper">
        <div className="footer-links">
          <a href="/blog">Blog</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-bottom-msg">
          <p>Designed by Erik at EMJ Web Design.</p>
        </div>
      </footer>
    )
  }
}