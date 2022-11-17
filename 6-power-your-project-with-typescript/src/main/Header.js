import styles from './Header.module.css'

function Header({title}) {
    return (
      <header className={'p-5 mb-2 ' + styles.Header}>
        <h1>{title}</h1>
      </header>
    )
}

export default Header;
