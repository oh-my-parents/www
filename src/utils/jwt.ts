import { decodeJwt } from "jose";

export const decode = (token: string) => {
  return decodeJwt(token);
};
