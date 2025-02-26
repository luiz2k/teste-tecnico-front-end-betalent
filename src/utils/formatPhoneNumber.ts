/**
 * Formata um número de telefone brasileiro.
 * Ex.: +55 (11) 12345-6789
 * @param number - Número de telefone a ser formatado
 * @returns Número formatado ou "Número inválido" se não for possível formatá-lo
 */
export const formatPhoneNumber = (number: string | number) => {
  const numStr = number.toString();

  if (numStr.length === 13 && numStr.startsWith("55")) {
    const countryCode = "+55";

    const ddd = numStr.slice(2, 4);
    const formattedNumber = `${numStr.slice(4, 9)}-${numStr.slice(9)}`;

    return `${countryCode} (${ddd}) ${formattedNumber}`;
  }

  return "Número inválido";
};
