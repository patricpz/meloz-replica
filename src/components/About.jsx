import './About.css'

const stats = [
  { value: '8+', label: 'Anos de experiência' },
  { value: '200+', label: 'Projetos entregues' },
  { value: '50+', label: 'Clientes ativos' },
  { value: '99%', label: 'Satisfação' },
]

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="container">
        <div className="about__inner">
          <div className="about__text">
            <span className="about__label">Quem somos</span>
            <h2>
              AJUDAMOS STARTUPS, PMEs E GRANDES EMPRESAS NA{' '}
              <span className="gradient-text">TOMADA DE DECISÕES CRÍTICAS DE NEGÓCIO.</span>
            </h2>
            <p>
              A <strong>Meloz</strong> é uma <strong>empresa de desenvolvimento de software</strong>{' '}
              estabelecida em São Paulo. Com uma equipe multidisciplinar de especialistas, entregamos
              soluções tecnológicas que transformam processos e impulsionam resultados.
            </p>
            <p>
              Nosso foco é criar produtos digitais de alta qualidade, com metodologias ágeis e
              transparência total durante todo o processo de desenvolvimento.
            </p>
          </div>

          <div className="about__stats">
            {stats.map((s) => (
              <div key={s.label} className="about__stat">
                <strong className="gradient-text">{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
