import { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);

  // carregar alerts
  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("campina365_alerts")) || [];

    setAlerts(saved);
  }, []);

  return (
    <MainLayout>
      <h1>Alertas</h1>

      {alerts.length === 0 ? (
        <p>Nenhum alerta no momento.</p>
      ) : (
        <ul>
          {alerts.map((alert) => (
            <li key={alert.id}>{alert.message}</li>
          ))}
        </ul>
      )}
    </MainLayout>
  );
}