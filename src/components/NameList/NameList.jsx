import { nanoid } from 'nanoid';

export const NameList = props => {
  const { contacts } = props;
  console.log('PROPS', props);
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <span>{contact.name}-------</span>
          <span>{contact.number}</span>
        </li>
      ))}
    </ul>
  );
};
