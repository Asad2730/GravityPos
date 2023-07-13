


export const handleChange = (field, value, setFormValues) => {

  setFormValues((prevState) => ({ 
    ...prevState, 
    [field]: { ...prevState[field], value: value }
  }));

};

  