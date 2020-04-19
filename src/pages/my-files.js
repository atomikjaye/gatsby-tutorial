import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>My Site's Files</h1>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>id</th>
              <th>extension</th>
              <th>birthtime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.id}</td>
                <td>{node.extension}</td>
                <td>{node.birthtime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
  allFile {
    edges {
      node {
        id
        relativePath
        blksize
        birthtime
        extension
        ext
        atime
        accessTime(formatString: "")
      }
    }
  }
}

`