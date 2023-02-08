import './InputField.css'
export default function InputField(props) {
  const { Variant } = props
  return (
    <label>
      {props.type === 'textarea' ? (
        <textarea
          style={{ appearance: 'none', '-webkit-appearance': 'none' }}
          required
          maxLength={props.MaxLength}
          placeholder={props.Placeholder}
          value={props.Value}
          id={props.Id}
          name={props.Name}
          data-next={props.DataNext}
          data-previous={props.DataPrevious}
          onChange={props.handleChangestate}
          className={['input', 'textarea', Variant].join(' ')}
        ></textarea>
      ) : (
        <input
          type={props.Type}
          style={{ appearance: 'none', '-webkit-appearance': 'none' }}
          required
          maxLength={props.MaxLength}
          placeholder={props.Placeholder}
          value={props.Value}
          id={props.Id}
          name={props.Name}
          data-next={props.DataNext}
          data-previous={props.DataPrevious}
          onChange={props.handleChangestate}
          className={['input', Variant].join(' ')}
        />
      )}
    </label>
  )
}
