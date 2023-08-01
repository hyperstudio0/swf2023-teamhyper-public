import { Injectable } from '@nestjs/common';
import * as process from 'process';
import { CallTrans } from '../../utils/danal.id.verification';
import { IdvReadyResult } from '../../model/idv.dto';
import { IdvSuccess } from '../../model/login.dto';
import axios from 'axios';

@Injectable()
export class IdvService {
  async ready(returnUri: string): Promise<IdvReadyResult> {
    const TransR: Map<string, string> = new Map();

    /******************************************************
     ** 아래의 데이터는 고정값입니다.( 변경하지 마세요 )
     * TXTYPE       : ITEMSEND
     * SERVICE    : UAS
     * AUTHTYPE    : 36
     ******************************************************/
    TransR.set('TXTYPE', 'ITEMSEND');
    TransR.set('SERVICE', 'UAS');
    TransR.set('AUTHTYPE', '36');

    /******************************************************
     * CPID   : 다날에서 제공해 드린 ID( function 파일 참조 )
     * CPPWD   : 다날에서 제공해 드린 PWD( function 파일 참조 )
     * TARGETURL : 인증 완료 시 이동 할 페이지의 FULL URL
     * CPTITLE   : 가맹점의 대표 URL 혹은 APP 이름
     ******************************************************/
    TransR.set('CPID', process.env.DANAL_IDV_ID);
    TransR.set('CPPWD', process.env.DANAL_IDV_PASS);
    // TransR.set('TARGETURL', process.env.DANAL_IDV_TARGETURL);
    TransR.set('TARGETURL', returnUri ?? process.env.DANAL_IDV_TARGETURL);

    /***[ 선택 사항 ]**************************************/
    /******************************************************
     * USERID       : 사용자 ID
     * ORDERID      : CP 주문번호
     * AGELIMIT    : 서비스 사용 제한 나이 설정( 가맹점 필요 시 사용 )
     ******************************************************/
    TransR.set('USERID', '');
    TransR.set('ORDERID', '');
    // TransR.set("AGELIMIT", "019");

    /********************************************************************************
     *
     * [ CPCGI에 HTTP POST로 전달되는 데이터 ] **************************************
     *
     ********************************************************************************/

    // /***[ 필수 데이터 ]************************************/
    // const ByPassValue: Map<string, string> = new Map();
    //
    // /******************************************************
    //  * BgColor      : 인증 페이지 Background Color 설정
    //  * BackURL      : 에러 발생 및 취소 시 이동 할 페이지의 FULL URL
    //  * IsCharSet	: charset 지정( EUC-KR:deault, UTF-8 )
    //  ******************************************************/
    // ByPassValue.set('BgColor', '00');
    // // ByPassValue.set('BackURL', '/BackURL');
    // ByPassValue.set('BackURL', errorUri ?? '/BackURL');
    // ByPassValue.set('IsCharSet', 'UTF-8');
    //
    // /***[ 선택 사항 ]**************************************/
    // /******************************************************
    //  ** CPCGI에 POST DATA로 전달 됩니다.
    //  **
    //  ******************************************************/
    // ByPassValue.set('ByBuffer', 'This value bypass to CPCGI Page');
    // ByPassValue.set('ByAnyName', 'Anyvalue');
    //
    // console.log(TransR, 'TransR');
    // console.log(ByPassValue, 'ByPassValue');

    return await CallTrans(TransR);
  }

  async parseResponse(response: string): Promise<IdvSuccess> {
    const splitString = response.split('&');
    const resultMap: Record<string, string> = {};
    for (let i = 0; i < splitString.length; i++) {
      const [key, value] = splitString[i].split('=');
      resultMap[key] = value;
    }

    const {
      RETURNCODE: returnCode,
      RETURNMSG: returnMsg,
      TID: tid,
      CI: ci,
      NAME: name,
      DOB: dob,
      SEX: sex,
      DI: di,
    } = resultMap;

    const result = new IdvSuccess();
    result.returnCode = returnCode;
    result.returnMsg = returnMsg;
    result.tid = tid;
    result.ci = ci;
    result.name = name;
    result.dob = dob;
    result.sex = sex;
    result.di = di;
    result.orderId = '';
    result.userId = '';
    return result;
  }

  async confirm(tid: string): Promise<IdvSuccess> {
    const url = `https://uas.teledit.com/uas/`;

    try {
      const response = await axios.get(url, {
        params: {
          TXTYPE: 'CONFIRM',
          TID: tid,
          IDENOPTION: '1',
        },
      });

      const resBody = await this.parseResponse(response.data);

      if (resBody.returnCode === '0000') {
        return resBody;
      } else {
        console.error(
          `code, message: ${resBody.returnCode}, ${resBody.returnMsg}`,
        );
        throw new Error(resBody.returnMsg);
      }
    } catch (error) {
      console.error('Failed to confirm:', error);
      throw error;
    }
  }
}
