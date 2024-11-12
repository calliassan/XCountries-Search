import styles from "./countries.module.css";

export function Card({ name, flagimage }) {
  return (
    <div className={styles.countryCard}>
      <img className={styles.imagecard} src={flagimage} alt="flag" />
      <p>{name}</p>
    </div>
  );
}
