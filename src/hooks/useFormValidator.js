import { useEffect, useState } from 'react'

const useFormValidator = (formData) => {
  const [formIsValid, setFormIsValid] = useState(true)
  useEffect(() => {
    let isValid = true
    for (const key in formData) {
      isValid = formData[key].valid && isValid
    }
    setFormIsValid(isValid)
  }, [formData])
  return [formIsValid]
}

export default useFormValidator
