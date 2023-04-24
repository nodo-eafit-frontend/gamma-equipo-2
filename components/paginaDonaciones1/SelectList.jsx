import React from 'react';
import '../../styles/components/paginaDonaciones1/_select-list.scss';

export function SelectList(props) {
  let options = [];
  if (props.options) {
    options = props.options;
  }

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <select
        className='selectList'
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
