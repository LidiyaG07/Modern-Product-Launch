import styles from './Button.module.css'


export const Btn = ({ btnText, variant = 'accent' }) => {
    return (
        <>
            <button className={`${styles.btn} ${styles[variant]}`}>{btnText}</button>
        </>
    )
}