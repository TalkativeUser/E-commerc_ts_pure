export async function login(email: string, password: string) {
  try {
    const res = await fetch(
      "https://api.escuelajs.co/api/v1/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
   let data = await res.json();
    if (!res.ok) {
     throw new Error(data.message || "Login failed");
    }
    return data;

  } catch (error) {
    throw error;
  }
}
