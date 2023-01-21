import styles from './InputField.module.css'
export default function InputField(props) {
  return (
    <input
      type='number'
      style={{ appearance: 'none', '-webkit-appearance': 'none' }}
      required
      maxLength={props.maxLength}
      placeholder={props.Placeholder}
      value={props.Value}
      id={props.Id}
      name={props.Name}
      data-next={props.DataNext}
      data-previous={props.DataPrevious}
      onChange={props.handleChangestate}
      className={styles.input}
    />
  )
}
