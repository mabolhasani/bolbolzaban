const request = async ({
  url,
  method = 'GET',
  headers = {},
  body = {},
  // token = null,
  contentType = null,
}) => {
  const finalHeaders = { ...headers };
  // if (token) {
  //   finalHeaders.Authorization = `${token.token_type} ${token.access_token}`;
  // } else if (store !== null) {
  //   finalHeaders.Authorization = `${userReducer.tokenType} ${userReducer.accessToken}`;
  // }
  if (contentType) {
    finalHeaders['Content-Type'] = contentType;
  }

  const response = await fetch(url, {
    method,
    headers: finalHeaders,
    ...(method === 'POST' && { body }),
  });

  return response.json();
};

export const getRequest = async ({ url, headers = {}, body = {}, token = null }) =>
  request({
    url,
    headers,
    body,
    token,
  });

export const postRequest = ({ url, headers = {}, body = {}, token = null, json = true }) =>
  request({
    url,
    headers,
    body,
    method: 'POST',
    token,
    contentType: (json && 'application/json') || null,
  });

export const putRequest = ({ url, headers = {}, body = {}, token = null, json = true }) =>
  request({
    url,
    headers,
    body,
    method: 'PUT',
    token,
    contentType: (json && 'application/json') || null,
  });

export const deleteRequest = ({ url, headers = {}, body = {}, token = null }) =>
  request({
    url,
    headers,
    body,
    method: 'DELETE',
    token,
  });

export default request;
