"use server";

import { signIn } from "../../auth";

export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    const r = await signIn(formData);
  } catch (error) {
    if (error) {
      throw error;
    }
  }
}
