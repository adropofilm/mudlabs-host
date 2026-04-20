let currentToken: string | null = null

export function setToken(token: string | null): void {
  currentToken = token
}

function getToken(): string | null {
  return currentToken
}

export async function apiClient<T>(
  path: string,
  options?: {
    method?: 'GET' | 'POST' | 'DELETE'
    body?: unknown
  }
): Promise<T> {
  const { method = 'GET', body } = options ?? {}

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 30_000)

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  const token = getToken()
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  let res: Response
  try {
    res = await fetch(`${import.meta.env.VITE_API_URL}${path}`, {
      method,
      headers,
      body: body !== undefined ? JSON.stringify(body) : undefined,
      signal: controller.signal,
    })
  } finally {
    clearTimeout(timeoutId)
  }

  if (res.status === 204) {
    return null as T
  }

  const data = await res.json().catch(() => null)

  if (!res.ok) {
    throw new Error(data?.message ?? `HTTP ${res.status}`)
  }

  return data as T
}
