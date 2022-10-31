import { IAPODQueryParams } from "../models/apiModels";

function getAPODDAL<T>(url: string, params: IAPODQueryParams): Promise<T[]> {
  return fetch(
    `${url}?${new URLSearchParams({
      date: params.date || "",
      count: params.count?.toString() || "",
    })}`
  )
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      if (params.count) {
        return response.json();
      } else {
        const res = (await response.json()) as Promise<T>;
        return [res];
      }
    })
    .then((res) => {
      return res as Promise<T[]>;
    });
}

export { getAPODDAL };
