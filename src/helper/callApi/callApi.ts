const API = process.env.REACT_APP_BASE_API;

export const callApi = (method: string, path: string, data?: object, protect?: string) => {
  return fetch(`${API}/${path}`, {
    body: JSON.stringify(data),
    headers: protect ? {
      "Authorization": "Bearer " + protect,
      "Content-Type": "application/json"
    } : {
        "Content-Type": "application/json"
      },
    method
  })
    // tslint:disable-next-line: no-any
    .then(async (status: any) => {
      if (status.status === 200 || status.status === 201) {
        return status.text().then((response: string) => {
          return { response: response ? JSON.parse(response) : {}, status };
        });
      } else if (status.status === 204) {
        return status;
      }

      return status.text().then((response: string) => {
        throw response ? JSON.parse(response) : {};
      });
    })
    // tslint:disable-next-line: no-any
    .catch((err: any) => {
      return err;
    });
};
