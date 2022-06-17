import "./TextInput.scss";

const TextInput = ({
  labelText,
  inputType,
  onChangeEvent,
  inputName,
  value,
}) => {
  return (
    <div className="text-input">
      <label htmlFor={inputName} className="text-input__label">
        {labelText}
      </label>
      <input
        type={inputType}
        name={inputName}
        className="text-input__input"
        value={value}
        onChange={onChangeEvent}
        required
      />
    </div>
  );
};

export default TextInput;
