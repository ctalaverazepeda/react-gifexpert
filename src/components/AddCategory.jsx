import { useState } from "react";
export const AddCategory = ({ onNewCategory }) => {
    // const [inputValue, setinputValue] = useState('One Punch');
    const [inputValue, setinputValue] = useState('');

    const onInputChange = (event) =>
    {
        setinputValue(event.target.value);
    }

    const onSubmit = (event) =>
    {
      event.preventDefault();
      // console.log(inputValue);
      // const cleanedInputValue = inputValue.trim();

      if(inputValue.trim().length <= 1) return;
      // setCategories(cat => [[inputValue], ...cat]);
      onNewCategory( inputValue.trim() );
      setinputValue('');
    }

    
  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input type="text" placeholder="Buscar Gifts" value={inputValue} onChange={ (event) =>{ onInputChange(event) } }/>
    </form>
  )
}
