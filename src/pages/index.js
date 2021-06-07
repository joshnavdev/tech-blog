import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by gollowing the Gastby Tutorial.</p>
      <StaticImage
        alt='Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera'
        src='../images/dog.webp'
      />
    </Layout>
  );
};

export default IndexPage;
