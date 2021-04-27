import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src="/Rita.svg" alt="RITA" />
      <div>
        <button>Quem somos?</button>
        <button>Contato</button>
        <button>Espaço dos fármacos</button>
      </div>
    </header>
  )
}
