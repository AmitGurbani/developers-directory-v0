import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navbar from "../components/Navbar"

const IndexPage: React.FC<PageProps> = () => {
  return (
      <Navbar/>     
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
