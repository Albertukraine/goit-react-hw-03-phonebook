import style from './NameList.module.css';
export const NameList = props => {
  const { contacts, deleteContact } = props;
  return (
    <ul className={style.list}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p className={style.contactWrapper}>
            <span className={style.nameText}>{contact.name}</span>
            <span className={style.numberValue}>{contact.number}</span>
          </p>
          <button name={contact.id} className={style.deleteBtn} onClick={deleteContact}>delete</button>
          
        </li>
      ))}
    </ul>
  );
};
