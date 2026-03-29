type AdminSession = {
  authenticated: boolean;
  user?: {
    id: string;
    email: string;
  };
};

async function parseJson<T>(response: Response): Promise<T> {
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message =
      typeof payload?.error === "string"
        ? payload.error
        : `Request failed (${response.status})`;
    throw new Error(message);
  }
  return payload as T;
}

export async function getAdminSession(): Promise<AdminSession> {
  const response = await fetch("/api/admin/auth/session", {
    method: "GET",
    credentials: "include",
  });

  return parseJson<AdminSession>(response);
}

export async function adminLogin(email: string, password: string): Promise<void> {
  const response = await fetch("/api/admin/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  await parseJson<{ ok: true }>(response);
}

export async function adminLogout(): Promise<void> {
  const response = await fetch("/api/admin/auth/logout", {
    method: "POST",
    credentials: "include",
  });

  await parseJson<{ ok: true }>(response);
}
