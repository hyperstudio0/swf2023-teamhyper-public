import axios, { AxiosResponse } from 'axios';
import { IdvReadyResult } from '../model/idv.dto';

/******************************************************
 * 개발용 옵션
 ******************************************************/

export async function CallTrans(
  data: Map<string, string>,
): Promise<IdvReadyResult> {
  const REQ_STR: string = data2str(data);
  const RES_STR = '';

  const DN_SERVICE_URL = 'https://uas.teledit.com/uas/';

  try {
    const response: AxiosResponse<any> = await axios.post(
      DN_SERVICE_URL,
      REQ_STR,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        },
      },
    );

    console.log(response.data, 'response');
    if (response.status === 200) {
      // RES_STR = iconv.decode(response.data, 'utf-8').toString();
      return await parseResponse(response.data);
    } else {
      // network error logic
      return await parseResponse('RETURNCODE=-1');
    }
  } catch (error) {
    console.log(error, 'error');
    // error handling
    return await parseResponse('RETURNCODE=-1');
  }
}

function data2str(data: Map<string, string>): string {
  let str = '';
  data.forEach(
    (val: string, key: string) => (str += key + '=' + encodeURI(val) + '&'),
  );
  return str.slice(0, -1);
}
export { data2str };

function str2data(str: string): Map<string, string> {
  const myMap: Map<string, string> = new Map<string, string>();
  const query: string[] = str.split('&');
  for (const elem of query) {
    const pair: string[] = elem.split('=');
    myMap.set(pair[0], pair[1]);
  }
  return myMap;
}
export { str2data };

export function MakeFormInput(
  myMap: Map<string, string>,
  arr?: string[],
): string {
  let ret = '';

  if (arr != null) {
    for (const i of arr) {
      if (myMap.has(i)) {
        myMap.delete(i);
      }
    }
  }

  for (const [key, val] of myMap) {
    ret += '<input type="hidden" name="';
    ret += key;
    ret += '" value="';
    ret += val;
    ret += '">';
    ret += '\n';
  }

  return ret;
}

export function MakeFormInputHTTP(
  HTTPVAR: Record<string, string | string[]>,
  arr?: string,
): string {
  let ret = '';
  let key = '';
  let val: string | string[] = [];

  for (const i of Object.keys(HTTPVAR)) {
    key = i;
    if (key === arr) {
      continue;
    }

    val = HTTPVAR[key];

    ret += '<input type="hidden" name="';
    ret += key;
    ret += '" value="';
    ret += val;
    ret += '">';
    ret += '\n';
  }

  return ret;
}

async function parseResponse(response: string): Promise<IdvReadyResult> {
  const result: IdvReadyResult = new IdvReadyResult('', '', '');

  const params: string[] = response.split('&');
  for (const param of params) {
    const [key, value] = param.split('=');

    if (key === 'RETURNCODE') {
      result.code = value;
    } else if (key === 'RETURNMSG') {
      result.message = value;
    } else if (key === 'TID') {
      result.tid = value;
    }
  }

  return result;
}
