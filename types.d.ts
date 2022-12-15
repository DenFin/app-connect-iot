import type { JWT } from 'next-auth/jwt'

declare module 'next-auth/jwt/types' {
  interface JWT {
    access_token: string;
    id_token: string;
  }
}
