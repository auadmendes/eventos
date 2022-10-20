import styles from './Header.module.css'

import eventsLogo from '../../assets/events-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={eventsLogo} alt="Eventos ES" />
      Event <strong className={styles.ES}>ES</strong>
    </header>
  )
}
