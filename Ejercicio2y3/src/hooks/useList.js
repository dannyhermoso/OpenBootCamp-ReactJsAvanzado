import { useState } from "react"

const useList = (initialValue = []) => {

    const [value, setValue] = useState(initialValue) 

    const push = (element) => {
        setValue((oldValue) => [...oldValue, element])
    }

    const remove = (index) => {
        setValue((oldValue) => oldValue.filter((el, i) => i !== index))
    }

    const isEmpty = () => value.length === 0
    const clearAll = () => setValue([])


    const sortList = () => {
        setValue((oldValue) => oldValue.sort((a, b) => a - b));
      };
    
      const reverse = () => {
        setValue((oldValue) => oldValue.reverse((a, b) => b - a));
      };

    return {
        push, 
        remove, 
        isEmpty,
        value,
        setValue,
        clearAll,
        sortList,
        reverse
    }
}

export default useList