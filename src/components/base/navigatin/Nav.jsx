import styles from './Nav.module.css'


export const Nav = ({ links }) => {
    const handleClick = (e, href) => {
        e.preventDefault()
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav >
            <ul className={styles.nav}>
                {links.map((link) => (
                    <li key={link.id}>
                        <a href={link.href} onClick={(e) => handleClick(e, link.href)}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}