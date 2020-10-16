import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

const query = graphql`
  {
    file(relativePath: { eq: "Profil.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  // console.log(data)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <h1>Jag är Marcus</h1>
            <div className="underline"></div>
            <h4>Student på TUC Linköping</h4>
            - 🔭 Jag håller på nu att skapa hemsidor med gatsby
            <br />
            - 🌱 Jag studar på TUC där jag läser kursen Sysytemutvecklare
            <br />
            - 🤔 Jag söker jobb inom IT- och Programingsvärlden
            <br />
            - 💬 Jag är intressrad i utvecklingen av internetets

            <br />- 💜 Tycker om programera i C# och göra hemsidor i Javascript
            
            
            <br />
            - ⚡ Jag lär mig nya saker snabbt och är logiskt tänkande
            <br />
            - 📫 Kontakta mig genom knappen under :)
            <br />
            <Link to="/contact" className="btn">
              kontakta mig
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}
export default Hero
