import React, {FunctionComponent} from 'react'
import styles  from './loader.module.scss'

const Loader: FunctionComponent = () => {
  return (
    <span className={styles.loader}></span>
  )
}

export default Loader