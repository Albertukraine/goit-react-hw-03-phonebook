import style from './Filter.module.css';

export const Filter = props => {
  // console.log("тест знаю что треба видаляти просто чогось не деплоїться", props);

  const { onInput, inputText } = props;

  return (
    <div className={style.filterWrapper}>
      <label>Find contacts by name</label>
      <input
        className={style.input}
        onChange={onInput}
        value={inputText}
        type="text"
        name="filter"
        placeholder="Type name to find"
      />
    </div>
  );
};
