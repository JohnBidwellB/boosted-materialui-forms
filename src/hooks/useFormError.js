import React, { useEffect, useState } from "react";

const useFormError = (formData) => {
  const [error, setError] = useState(true);
  //   useEffect(() => {
  //     let isValid = true;
  //     for (let key in formData) {
  //       isValid = formData[key].valid && isValid;
  //     }
  //     setFormIsValid(isValid);
  //   }, [formData]);
  return [error];
};

export default useFormError;
