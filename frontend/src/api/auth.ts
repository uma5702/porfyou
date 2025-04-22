const API_URL = 'http://localhost:3000';

export const signIn = async (email: string, password: string) => {
  const res = await fetch(`${API_URL}/auth/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error('로그인 실패');
  return res.json();
};
export const signUp = async (email: string, password: string) => {
    const res = await fetch(`${API_URL}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, role: 'user' }),
    });
    if (!res.ok) throw new Error('회원가입 실패');
    return res.json();
  };