/* eslint-disable import/no-unresolved */
import { postRequest } from '@utils/request';
import BASE_PATH from '@app-settings';

const generateTextRequest = async ({ style, input, topk, temper }) => {
  const body = JSON.stringify({
    Context: input,
    style,
    topk,
    Temperature: temper,
  });

  return postRequest({
    url: `${BASE_PATH}/deeptext/`,
    body,
  });
};

export default generateTextRequest;
