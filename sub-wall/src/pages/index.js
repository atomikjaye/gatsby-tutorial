import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `steelblue` }}>
    <Link to="/contact">Contact</Link>
    <Header headerText="Hello Jaye" />
    <p>This is our awesome subwall.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>)
