// new Date()를 timestamp로 변환하는 함수
export function dateToTimestamp(date: Date): number {
  return Math.floor(date.getTime() / 1000); // 초 단위 timestamp 반환
}

// timestamp를 new Date()로 변환하는 함수
export function timestampToDate(timestamp: number): Date {
  return new Date(timestamp * 1000); // 밀리초 단위 timestamp를 받아서 Date 객체 반환
}
