import './checkBox.scss';

const CheckBox = ({ isChecked, filterID, title, toggleChecked }) => {
  const changeChecked = () => toggleChecked(filterID);

  return (
    <label className='label-for-checkbox'>
      <input checked={isChecked} onChange={changeChecked} type='checkbox' className='checkbox' name='checkbox' />
      <span className='checkbox__style'></span>
      <p className='checkbox__title'>{title}</p>
    </label>
  );
};

export default CheckBox;
