import { RequestData } from "./httpClient.d";

// Faz as requisições para a API
export class HttpClient {
  constructor(private readonly baseUrl: string) {}

  public readonly request = async <Data>(
    requestData: RequestData,
  ): Promise<Data> => {
    try {
      const res = await fetch(`${this.baseUrl}${requestData.path}`, {
        method: requestData.method,
        body: requestData.body,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data: Data = await res.json();

      return data;
    } catch {
      throw new Error("Houve um erro interno, Tente novamente.");
    }
  };
}
