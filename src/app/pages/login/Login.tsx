import { useCallback, useEffect, useMemo, useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailLenght = useMemo(() => {
    console.log("Executou");
    return email.length * 100;
  }, [email.length]);

  useEffect(() => {
    console.log(email);
  }, [email]);

  useEffect(() => {
    console.log(password);
  }, [password]);

  const handleLogin = useCallback(() => {
    console.log(email);
    console.log(password);
  }, [email, password]);

  return (
    <div>
      <form action="">
        <p>Quantidade de carateres do Email: {emailLenght}</p>

        <label htmlFor="">
          <span>Email</span>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label htmlFor="">
          <span>Senha</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="button" onClick={handleLogin}>
          Entrar
        </button>
      </form>
    </div>
  );
};
