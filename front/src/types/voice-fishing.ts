export type IBlackList = {
    id: string;
    reason: number;
    identityType: number;
}

export type IWhiteList = {
    did: string;
}

export const REASON_TYPES = [
    {label: 'Phishing Attempt (피싱 시도)', value: 0},
    {label: 'Scam Report (사기 행위)', value: 1},
    {label: 'Suspicious Activity (의심스러운 활동)', value: 2},
    {label: 'Fraud Report (부정 행위)', value: 3},
    {label: 'Identity Theft (신분 도용)', value: 4},
    {label: 'Illegal Transaction (불법 거래)', value: 5},
    {label: 'Money Laundering (돈세탁)', value: 6},
    {label: 'Black Market Activity (불법 시장 활동)', value: 7},
    {label: 'High Risk (높은 위험)', value: 8},
    {label: 'Other (기타)', value: 9},
];

export const ID_TYPES = [
    {label: '보이스 피싱 전화번호', value: 0},
    {label: '대포 통장', value: 1},
    {label: '부정 지갑 주소', value: 2},
];
