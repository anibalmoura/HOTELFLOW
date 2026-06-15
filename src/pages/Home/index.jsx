import MainLayout from "../../components/layout/MainLayout";
import EventCalendar from "../../components/events/EventCalendar";
import campinaImg from "../../assets/campina-grande.avif";

export default function Home() {
  return (
    <MainLayout>
      
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${campinaImg})` }}
      >
        <h1>Campina Grande</h1>
        <p>
          Plataforma inteligente para acompanhar eventos, turismo, comércio e
          oportunidades em Campina Grande durante todo o ano.
        </p>
      </section>

      <section className="dashboard-cards">
        <div className="card">
          <h3>Eventos</h3>
          <p>Calendário atualizado com atrações, shows, feiras e eventos da cidade.</p>
        </div>

        <div className="card">
          <h3>Turismo</h3>
          <p>Informações úteis para visitantes e moradores.</p>
        </div>

        <div className="card">
          <h3>Comércio</h3>
          <p>Oportunidades para negócios locais.</p>
        </div>
      </section>

      <EventCalendar />

    </MainLayout>
  );
}

