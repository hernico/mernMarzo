import { useState } from "react";

const useInput = (initialValue) => {
    const [value,setValue] = useState(initialValue);

const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value)
}

return {
value,
onChange: handleChange

}

// }
// return [value, handleChange];   
// }}

}

export default useInput;