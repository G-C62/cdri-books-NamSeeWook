const BASE_URL = "https://dapi.kakao.com/v3/";
const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY ?? '';

if (!KAKAO_API_KEY) {
  console.error('KAKAO_API_KEY is not set in environment variables');
}

const defaultOptions: RequestInit = {
  headers: {
    'Authorization': `KakaoAK ${KAKAO_API_KEY}`,
    'Content-Type': 'application/json',
  },
};

export const kakaoFetch = async <T>(url: string, options: RequestInit = {}) => {
  console.log('defaultOptions', defaultOptions);
  const response = await fetch(`${BASE_URL}${url}`, {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  });
  return response.json() as Promise<T>;
}; 