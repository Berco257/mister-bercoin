import { Move } from "./move.model";

export interface User {
    _id?: string,
    fullName: string,
    username: string,
    password: string,
    coins: number,
    moves: Move[],
  }
