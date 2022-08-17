import { atom } from "recoil";
export const LoginStatus = atom({
  key: "LoginStatus",
  default: fatrlse,
});
export const board = atom({
  key: "BoardStatus",
  default: false,
});
