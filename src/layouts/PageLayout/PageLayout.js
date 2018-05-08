import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <h1>Vmock Assignment</h1>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
