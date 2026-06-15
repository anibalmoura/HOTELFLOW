import { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: email, // usando email como username
          password: password
        })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Erro no login");
        return;
      }

      // 🔐 salvar token e usuário
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login realizado com sucesso!");

      console.log("TOKEN:", data.token);
      console.log("USER:", data.user);

    } catch (error) {
      alert("Erro ao conectar com servidor");
    }
  }

  return (
    <MainLayout>
      <h1>Login Admin</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Usuário (admin)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha (123456)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>
    </MainLayout>
  );
}