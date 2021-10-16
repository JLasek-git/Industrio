import React from "react";
import PropTypes from "prop-types";
import PageLayout from "../PageLayout/PageLayout";

const MainLayout = ({ children }) => (
  <div>
    <PageLayout />
    {/* Add header which is this window bar on top */}
    <main>{children}</main>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
