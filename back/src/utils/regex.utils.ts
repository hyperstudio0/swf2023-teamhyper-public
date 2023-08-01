import { KoreanName } from '../model/default.dto';

const regexUtils = {
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
  mobileNumber: /^\d{3}\d{3,4}\d{4}$/,
  birthdate: /^\d{4}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/,
  password: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
  nickname: /^[a-zA-Z가-힣][a-zA-Z0-9가-힣]{1,19}$/,
};

export function validateEmail(email: string): boolean {
  return regexUtils.email.test(email);
}

export function validateMobileNumber(mobileNumber: string): boolean {
  return regexUtils.mobileNumber.test(mobileNumber);
}

export function validateBirthdate(birthdate: string): boolean {
  return regexUtils.birthdate.test(birthdate);
}

export function validateNickname(nickname: string): boolean {
  return regexUtils.nickname.test(nickname);
}

// 최소 8자 이상, 최대 15자 이하여야 합니다.
// 적어도 하나의 알파벳(대문자 또는 소문자)이 있어야 합니다.
// 적어도 하나의 숫자(0-9)가 있어야 합니다.
// 적어도 하나의 특수문자(!@#$%^*+=-)가 있어야 합니다.
// 알파벳, 숫자, 특수문자(!@#$%^*+=-)가 포함된 문자열을 검증합니다.
export function validatePassword(password: string): boolean {
  if (!password) {
    return false;
  }
  return regexUtils.password.test(password);
}

export function splitKoreanName(fullName: string): KoreanName {
  if (fullName && fullName.length > 1) {
    return { lastName: fullName.slice(0, 1), firstName: fullName.slice(1) };
  }
  return undefined;
}

// 사용 예시
const email = 'user@example.com';
const mobileNumber = '01012345678';
const mobileNumber2 = '010-1234-5678';
const birthdate = '19900101';
const password = 'abcd25fK!';

console.log(validateEmail(email), '이메일 유효성 : ' + email); // true
console.log(
  validateMobileNumber(mobileNumber),
  '휴대폰번호 유효성 : ' + mobileNumber,
); // true
console.log(
  validateMobileNumber(mobileNumber2),
  '휴대폰번호 유효성 : ' + mobileNumber2,
); // true
console.log(validateBirthdate(birthdate), '생년월일 유효성 : ' + birthdate); // true
console.log(validatePassword(password), '비밀번호 유효성 : ' + password); // true
