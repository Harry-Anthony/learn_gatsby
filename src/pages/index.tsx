import * as React from "react"
import { HeadFC, Link } from "gatsby"
import '../assets/main.css';
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Software from "../sections/software";
import Protection from "../sections/Protection";
import Pricing from "../sections/Pricing";
import Customer from "../sections/Customer";
import FormEmail from "../sections/FormEmail";
import RecentNews from "../sections/RecentNews";

const pcImage = {
  textAlign: 'center',
  marginTop: '-158px'
}

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <div style={pcImage}>
          <StaticImage src='../assets/img/mac.png' alt='mac' />
        </div>
        <Software />
        <Protection />
        <Pricing />
        <Customer />
        <FormEmail />
        <RecentNews />
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
