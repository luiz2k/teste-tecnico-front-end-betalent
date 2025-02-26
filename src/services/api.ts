import { HttpClient } from "./httpClient.ts/httpClient";

const apiURL = import.meta.env.VITE_API_URL;

export const api = new HttpClient(apiURL);
