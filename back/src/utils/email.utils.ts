import { EmailFile } from '../model/email.dto';
import { readFileSync } from 'fs';
import * as path from 'path';
import Handlebars from 'handlebars';

const PATH_EMAIL_TEMPLATE = '../templates/email';
export function fileEmailBody(
  from: string,
  to: string,
  subject: string,
  body: string,
  file: EmailFile,
): string {
  const boundary = '___BOUNDARY___';

  let email = '';
  email += `From: ${from}\r\n`;
  email += `To: ${to}\r\n`;
  email += `Subject: ${subject}\r\n`;
  email += `MIME-Version: 1.0\r\n`;
  email += `Content-Type: multipart/mixed; boundary="${boundary}"\r\n`;
  email += `\r\n`;

  email += `--${boundary}\r\n`;
  email += `Content-Type: text/html; charset=UTF-8\r\n`;
  email += `Content-Disposition: inline\r\n`;
  email += `\r\n`;
  email += body;
  email += `\r\n`;

  email += `--${boundary}\r\n`;
  email += `Content-Type: application/pdf\r\n`;
  email += `Content-Disposition: attachment; filename="${file.filename}"\r\n`;
  email += `Content-Transfer-Encoding: base64\r\n`;
  email += `\r\n`;
  email += file.data.toString('base64');
  email += `\r\n`;

  email += `--${boundary}--\r\n`;

  return email;
}

export function textEmailBody(
  from: string,
  to: string,
  subject: string,
  body: string,
) {
  return `From: ${from}\nTo: ${to}\nSubject: ${subject}\n\n${body}\n`;
}

export function htmlEmailBody(
  from: string,
  to: string,
  subject: string,
  body: string,
) {
  return `From: ${from}\nTo: ${to}\nSubject: ${subject}\nContent-Type: text/html; charset=UTF-8\n\n${body}\n`;
}

/**
 * 이메일 템플릿 폴더
 * @param folder
 * @param lang
 */
export function templateBody(folder: string, lang: string) {
  const body = readFileSync(
    path.join(__dirname, PATH_EMAIL_TEMPLATE, folder, `${langHtml(lang)}`),
    'utf8',
  );
  return Handlebars.compile(body);
}

/**
 * 언어별 발신 템플릿
 * @param lang
 */
export function langHtml(lang: string) {
  switch (lang) {
    case 'ko':
      return 'ko.html';
    case 'en':
    default:
      return 'en.html';
  }
}
