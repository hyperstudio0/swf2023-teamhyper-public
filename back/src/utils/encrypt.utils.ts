import * as CryptoJS from 'crypto-js';
import * as process from 'process';

export function encryptTest() {
  const testText = 'test@example.com';
  const encrypted = encrypt(testText);
  console.log('[TEST 암호화] Encrypted:', encrypted);
  const decrypted = decrypt('smfMhNOEIBbfhgqDUDMDOw==');
  console.log('[TEST 복호화] Decrypted:', decrypted);
}

/**
 * 개인정보
 * 개인정보의 안정성 확보조치 기준 제7조(개인정보의 암호화)
 * 1. 고유식별번호
 * 2. 바이오정보
 * 3. 비밀번호
 * 개인정보의 기술적·관리적 보호조치 기준 제6조(개인정보의 암호화)
 * 1. 주민등록번호
 * 2. 여권번호
 * 3. 운전면허번호
 * 4. 외국인등록번호
 * 5. 신용카드번호
 * 6. 계좌번호
 * 7. 바이오정보
 * @param text
 */
export function encrypt(text: string): string {
  if (text) {
    const secretKey = process.env.ENCRYPT_SECRET_KEY;
    const iv = process.env.ENCRYPT_IV;
    return CryptoJS.AES.encrypt(text, CryptoJS.enc.Utf8.parse(secretKey), {
      iv: CryptoJS.enc.Utf8.parse(iv),
    }).toString();
  }
  return undefined;
}

export function decrypt(text: string): string {
  if (text) {
    const secretKey = process.env.ENCRYPT_SECRET_KEY;
    const iv = process.env.ENCRYPT_IV;
    return CryptoJS.AES.decrypt(text, CryptoJS.enc.Utf8.parse(secretKey), {
      iv: CryptoJS.enc.Utf8.parse(iv),
    }).toString(CryptoJS.enc.Utf8);
  }
  return undefined;
}

export function encryptTransformer() {
  return {
    from(val: string | null | undefined) {
      return val && decrypt(val);
    },
    to(val: string | null | undefined) {
      return val && encrypt(val);
    },
  };
}
