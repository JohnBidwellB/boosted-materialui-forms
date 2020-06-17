const validateRut = (rut) => {
  // Limpieza de . y -
  // eslint-disable-next-line
  let value = rut.replace(/\./g, "").replace(/\-/g, "");

  // Extracción de dígito cuerpo y verificador
  let body = value.slice(0, -1);

  if (body.length < 7) {
    return false;
  }

  // Invertimos el orden de los factores
  let rutReversed = body.trim().split("").reverse();

  // Multiplicación
  let sum = 0;
  let multiplier = 2;
  for (let i = 0; i < rutReversed.length; i++) {
    sum += parseInt(rutReversed[i]) * multiplier;
    multiplier = multiplier === 7 ? 2 : multiplier + 1;
  }

  // Divide la suma por 11
  let quotient = Math.trunc(sum / 11);
  // Multiplica el cociente por 11
  let product = quotient * 11;
  // A sum se le resta product
  let minus = Math.abs(sum - product);
  // Finalmente se obtiene el dígito verificador
  let checkDigit = 11 - minus < 10 ? 11 - minus : 11 - minus === 11 ? 0 : "K";

  return checkDigit;
};

export const rutValidation = (value) => {
  let valid = false;
  const dv = validateRut(value);
  if (dv !== false) {
    if (
      dv ===
      (value.slice(-1).toUpperCase() === "K" ? "K" : parseInt(value.slice(-1)))
    ) {
      valid = true;
    } else {
      valid = false;
    }
  }

  return valid;
};
