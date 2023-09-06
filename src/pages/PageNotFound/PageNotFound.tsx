import React from 'react'
import styles from "./PageNotFound.module.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {

  const { app__error, error__center } = styles;

  return (
    <main className={app__error}>
      <div className={error__center}>
        <h1>404</h1>
        <p>Page Not Found</p>
        <Link to='/'>Back Home</Link>
      </div>
    </main>
  )
}

export default PageNotFound