import React from "react";
import PageNav from "../PageNav/PageNav";
import ProfilePanel from "../ProfilePanel/ProfilePanelContainer";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => (
  <div>
    <PageNav />
    <ProfilePanel />
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
