import styles from "./Contact.module.css";

const Contact = ({ contact, deleteContact }) => {
  return (
    <li className={styles.container}>
      <div className={styles.info}>
        <span className={styles.name}>{contact.name}</span>
        <span className={styles.number}>{contact.number}</span>
      </div>
      <button
        onClick={() => deleteContact(contact.id)}
        className={styles.button}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
