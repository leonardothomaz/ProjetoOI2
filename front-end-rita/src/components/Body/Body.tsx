import styles from './styles.module.scss'
import { Intro } from '../Intro'

export function Body() {
  return (
    <body className={styles.bodyContainer}>
      <Intro />
    </body>
  )
}
