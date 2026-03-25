import { Btn } from "../../base/btn/Btn"
import { Nav } from "../../base/navigatin/Nav"
import styles from './Header.module.css'



export const Header = ({ }) => {
    const navLinks = [
        { id: 1, label: 'Benefits', href: '#home' },
        { id: 2, label: 'Specifications', href: '#about' },
        { id: 3, label: 'How-to', href: '#features' },
        { id: 4, label: 'Contact Us', href: '#contact' }
    ]

    return (
        <div className={styles.header}>
            <h2>Area</h2>
            <Nav links={navLinks} />
            <Btn btnText='Learn More' />
        </div>
    )
}