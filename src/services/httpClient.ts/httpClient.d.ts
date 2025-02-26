export type RequestData = {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: BodyInit;
  headers?: HeadersInit;
};
