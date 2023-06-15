
export const handleChange = ( field,value,setValue) => {
  setValue((prevState) => ({ ...prevState, [field]: value }));
};


  