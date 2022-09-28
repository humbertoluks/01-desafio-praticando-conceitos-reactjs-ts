import styles from './header.module.css'
import todoLogo from '../../assets/Logo.svg'

export function Header() {
  return (
    <header className={styles.todoHeader}>
      <img src={todoLogo} alt="Todo Logo" />
    </header>
  )
}
