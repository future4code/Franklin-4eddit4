import { useState } from 'react';

// receive a initial state (object)
const useForm = initialState => {
  const [form, setForm] = useState(initialState);

  const handleInputChange = event => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  // function to clean inputs
  const clear = () => {
    setForm(initialState);
  };

  return [form, handleInputChange, clear];
};

export default useForm ;