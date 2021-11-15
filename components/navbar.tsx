import styles from '../styles/navbar.module.css'

export default function Navbar(){
    return (
        <nav id={styles.navbar} >
        <img src="plus.svg" alt="plus icon" />
        <img src="home.svg" alt="home icon" />
        <img src="profile_placeholder.svg" alt="search icon" />
        <img src="search.svg" alt="search icon" />
        </nav>
    )
}