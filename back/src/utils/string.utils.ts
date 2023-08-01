export function getEnumKeyByEnumValue<T extends { [index: string]: string }>(
  myEnum: T,
  enumValue: string,
): keyof T | null {
  const keys = Object.keys(myEnum).filter((x) => myEnum[x] == enumValue);
  return keys.length > 0 ? keys[0] : null;
}

export function isEmpty(text: string) {
  return text === undefined || text === '' || text === null;
}

export function generateRandomNumber(): string {
  return Math.floor(10000 + Math.random() * 90000).toString();
}
