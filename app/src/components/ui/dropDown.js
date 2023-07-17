import { Select, Option } from "@material-tailwind/react";
 
export default function CustomDropDown({ placeHolder,items }) {
  items = items || [];
  
  return (
      
      <Select label={placeHolder} className="bg-white ">
        {items.length > 0 ? items.map((item, index) => (
          <Option key={index}>{item.name}</Option>
        )) : <Option>No options available</Option>}
      </Select>
     
  );
}
