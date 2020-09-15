// import React, { useEffect, useState } from 'react'

import { useEffect, useState } from "react";

const useFormError = (type = null, errors = null, formData = null) => {
	const [formDataWithErrors, setFormDataWithErrors] = useState(formData);
	useEffect(() => {
		switch (type) {
			case "mongo":
				if (errors && formData) {
					Object.entries(errors).map(([key, data]) => {
						formData[key] = {
							...formData[key],
							valid: false,
							errorMessage: data.properties.message,
						};
					});
					break;
				} else {
					break;
				}
			default:
				break;
		}
		setFormDataWithErrors(formData);
	}, [errors]);
	return [formDataWithErrors];
};

export default useFormError;

// const errors = {
//   email: {
//     properties: {
//       message: 'string no es un email',
//       type: 'user defined',
//       path: 'email',
//       value: 'string'
//     },
//     kind: 'user defined',
//     path: 'email',
//     value: 'string'
//   },
//   rut: {
//     properties: {
//       message: 'string no es un rut valido',
//       type: 'user defined',
//       path: 'rut',
//       value: 'string'
//     },
//     kind: 'user defined',
//     path: 'rut',
//     value: 'string'
//   }
// }

// {
//   "errors": {
//     "email": {
//       "properties": {
//         "message": "string no es un email",
//         "type": "user defined",
//         "path": "email",
//         "value": "string"
//       },
//       "kind": "user defined",
//       "path": "email",
//       "value": "string"
//     },
//     "rut": {
//       "properties": {
//         "message": "string no es un rut valido",
//         "type": "user defined",
//         "path": "rut",
//         "value": "string"
//       },
//       "kind": "user defined",
//       "path": "rut",
//       "value": "string"
//     }
//   },
//   "_message": "User validation failed",
//   "message": "User validation failed: email: string no es un email, rut: string no es un rut valido"
// }
