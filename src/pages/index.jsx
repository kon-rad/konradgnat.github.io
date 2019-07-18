import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
// import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import Project from "../components/Project/Project";
import config from "../../data/SiteConfig";
import tankBattalion from '../../content/images/home/tank.png';
import readBooks from '../../content/images/home/read-books.png';
import coherentBreathing from '../../content/images/home/coherentBreathing.png';

const PROJECTS = [
  {
    title: 'TankBattalion.xyz',
    image: tankBattalion,
    link: 'http://tankbattalion.xyz',
    description: 'A 2D game built from scratch with vanilla JavaScript and' +
      ' the canvas element. It includes a single player and live multi ' +
      'player modes. Play it at the link below!\n' +
      ' Node, Express, Jade, Hosted on Digital Ocean',
  },
  {
    title: 'readsplanet.com A NodeJS, React, MongoDB App',
    image: readBooks,
    link: 'https://readsplanet.com',
    github: 'https://github.com/kon-rad/readbooks',
    description: 'Features user sign in, create, edit, delete posts and ' +
      'comments. Follow users and edit profile. Passport library for' +
      'authentication and EJS templating engine. Data on books is received ' +
      ' from Google Books API. Tools: Node, Express, React, Flow, Enzyme,' +
      ' MongoDB',
  },
  {
    title: 'CoherentBreathing.xyz',
    image: coherentBreathing,
    link: 'https://coherentbreathing.xyz',
    github: 'https://github.com/kon-rad/coherentBreathingApp',
    description: 'Practice coherent breathing techniqueNode React Redux' +
      ' Express PassportJS Deployed to Digital Ocean',
  },
];

class Index extends React.Component {
  render() {
    // const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <main className="mt5">
            <div className="flex flex-column items-center">
              <div className="mw6 tc vh-100">
                <h1>Hi, I'm Konrad</h1>
                <p>
                  I'm a full-stack web developer specializing in React.
                  I'm obsessed with creating revolutionary
                  user interfaces and pushing humanity forward with
                  really great technology and art. I build things from scratch and
                  write about what I learn.
                </p>
              </div>
              <div className="mt5 tc vh-100">
                <h3>Projects</h3>
                <div className="flex flex-column items-center">
                  {PROJECTS.map(project => <Project {...project} />)}
                </div>
              </div>
            </div>
          </main>
          {/*<PostListing postEdges={postEdges} />*/}
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
