import style from './NameList.module.css';
export const NameList = props => {
  const { contacts } = props;
  return (
    <ul className={style.list}>
      {contacts.map(contact => (
        <li key={contact.id}>
            <p className={style.contactWrapper}>
          <span className={style.nameText}>{contact.name}</span>
          <span className={style.numberValue}>{contact.number}</span>

            </p>
        </li>
      ))}
    </ul>
  );
};
