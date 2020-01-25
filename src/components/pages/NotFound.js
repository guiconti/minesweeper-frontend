import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../elements/shared/PageWrapper';
import Header from '../elements/shared/Header';

const NotFound = () => {
  return (
    <PageWrapper>
      <Header value="Page not found" />
      <Link to="/"> Go back to homepage </Link>
    </PageWrapper>
  );
};

export default NotFound;
