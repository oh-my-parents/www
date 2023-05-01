interface ImportMetaEnv {
  readonly VITE_APP_HOST: string
  readonly VITE_APP_KAKAO_API_KEY: string
  // 다른 환경 변수들에 대한 타입 정의...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}