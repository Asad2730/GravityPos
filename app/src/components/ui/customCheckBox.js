import { Fragment } from "react";
import { Checkbox } from "@material-tailwind/react";
import { handleChange } from "../../hooks/handleChange";



 
export default function CustomCheckBox({  field, value, onChange, required, readOnly }) {
  
    const handleOnChange = (e) => {
        const { value } = e.target;
        if (onChange) {
          handleChange(field, value, onChange);
        }
      };

  return (
    <Fragment>
      <Checkbox  
        className="bg-white"
        value={value}
        onChange={handleOnChange}
        ripple={true}
        required={required} 
        readOnly={readOnly}/>
    </Fragment>
  );
}