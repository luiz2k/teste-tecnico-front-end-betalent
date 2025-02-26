import { useEffect, useState } from "react";

/**
 * Hook que retorna o valor de entrada com um delay.
 * Isso é útil quando você precisa esperar um pouco antes de fazer algo com o valor,
 * como atualizar interface de usuário.
 *
 * @param value O valor a ser debounced
 * @param delay O tempo de delay em milissegundos (padrão é 500ms)
 * @returns O valor de entrada
 */
export function useDebounce<V>(value: V, delay: number = 500): V {
  const [debouncedValue, setDebouncedValue] = useState<V>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
