import { computed, signal } from "@preact/signals";

export type Signed = "In" | "Out";
export type UserSession = { 
  signed: Signed,
  email?: string 
};

export const signed = signal<UserSession>({ signed: "Out" });