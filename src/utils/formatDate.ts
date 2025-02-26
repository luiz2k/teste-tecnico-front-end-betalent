/**
 * Formata uma data para o formato dd/mm/yyyy
 * @param date - Data a ser formatada
 * @returns Data formatada ou "Data inválida" se não for possível formatá-lo
 */
export const formatDate = (date: string | Date): string => {
  const formattedDate = new Date(date).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  if (formattedDate === "Invalid Date") {
    return "Data inválida";
  }

  return formattedDate;
};
