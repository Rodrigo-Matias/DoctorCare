import { BrandLogo, CloseIco, MailIco, OpenIco, PinpointIco, UpArrow, WhatsappIco } from './assets/SvgImageDump';
import { Card } from './components/Card';
import { SocialLinks } from './components/SocialLinks';
import { Stat } from './components/Stat';
import { Testimonial } from './components/Testimonial'

export function App() {

  return (
    <>
      <nav id="navigation">
        <div className="wrapper">
          <a href="#home" className="logo">
          <BrandLogo />
          </a>

          <div className="menu">
            <ul>
              <li><a onClick={closeMenu} href="#home">Início</a></li>
              <li><a onClick={closeMenu} href="#services">Serviços</a></li>
              <li><a onClick={closeMenu} href="#about">Sobre</a></li>
              <li><a onClick={closeMenu} href="#testimonials">Depoimentos</a></li>
            </ul>

            <a onClick={closeMenu} href="#contact" className="button">Agende sua consulta</a>

            <SocialLinks />
            
          </div>

          <button
          aria-expanded="false"
          aria-label="Abrir menu"
          onClick={openMenu}
          className="open-menu"
        >
          <OpenIco />
        </button>
        <button
          aria-expanded="true"
          aria-label="Fechar menu"
          onClick={closeMenu}
          className="close-menu"
        >
          <CloseIco />
        </button>

        </div>

      </nav>

      <section id="home">
        <div className="wrapper">
          <div className="col-a">
            <header>
              <h4>BOAS-VINDAS A DOCTORCARE 👋</h4>
              <h1>Assistência médica simplificada para todos</h1>
            </header>

            <div className="content">
              <p>Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.</p>
              <a href="#contact" className="button">
                <WhatsappIco />

              Agende sua consulta</a>
            </div>

          </div>

          <div className="col-b">
            <img
              src="./src/assets/mulher-negra-com-moleton-verde-com-as-duas-maos-no-peito.png"
              alt="Mulher negra vestindo moletom verde com as duas mãos no peito e sorrindo"
            />
          </div>

          <div className="stats">

            <Stat indice="+3500" text="Pacientes Atendidos" />
            <Stat indice="+15" text="Especialistas Disponíveis" />
            <Stat indice="+10" text="Anos no Mercado" />

          </div>
        </div>
      </section>

      <section id="services">
      <div className="wrapper">
        <header>
          <h4>Serviços</h4>
          <h2>Como podemos ajudá-lo a se sentir melhor?</h2>
        </header>

        <div className="content">
          <div className="cards">
            
            <Card
                title="Problemas Digestivos"
                text="Amet minim mollit non deserunt ullamco est sit aliqua 
                  dolor do amet sint. Velit officia consequat duis enim."
            />

            <Card
                title="Saúde Hormonal"
                text="Amet minim mollit non deserunt ullamco est sit aliqua 
                  dolor do amet sint. Velit officia consequat duis enim."
            />

            <Card
                title="Bem-estar Mental"
                text="Amet minim mollit non deserunt ullamco est sit aliqua 
                  dolor do amet sint. Velit officia consequat duis enim."
            />

            <Card
                title="Cuidados Pediátricos"
                text="Amet minim mollit non deserunt ullamco est sit aliqua 
                  dolor do amet sint. Velit officia consequat duis enim."
            />

            <Card
                title="Autoimune e Inflamação"
                text="Amet minim mollit non deserunt ullamco est sit aliqua 
                  dolor do amet sint. Velit officia consequat duis enim."
            />
            
            <Card
                title="Saúde do Coração"
                text="Amet minim mollit non deserunt ullamco est sit aliqua 
                  dolor do amet sint. Velit officia consequat duis enim."
            />
            
            <Card
                title="Bem-estar Mental"
                text="Amet minim mollit non deserunt ullamco est sit aliqua 
                  dolor do amet sint. Velit officia consequat duis enim."
            />

            <Card
                title="Problemas Digestivos"
                text="Amet minim mollit non deserunt ullamco est sit aliqua 
                  dolor do amet sint. Velit officia consequat duis enim."
            />

          </div>
        </div>
      </div>
    </section>

    <section id="about">
      <div className="wrapper">
        <div className="col-a">
          <header>
            <h4>Sobre nós</h4>
            <h2>Entenda quem somos e por que existimos</h2>
          </header>

          <div className="content">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim. Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim. Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim. Amet minim
              mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
          </div>
        </div>

        <div className="col-b">
          <img
            src="./src/assets/doutor-feliz-segurando-prancheta-com-pacientes.png"
            alt="Doutor feliz segurando prancheta com pacientes"
          />
        </div>
      </div>
    </section>

    <section id="testimonials">
      <div className="wrapper">
        <header>
          <h4>Depoimentos</h4>
          <h2>O que os clientes dizem sobre a DoctorCare</h2>
        </header>

        <div className="content">
          <div className="cards">
            
            <Testimonial
                text="Amet minim mollit non deserunt ullamco est sit aliqua 
                  dolor do amet sint. Velit officia consequat duis enim."
                subscriptorName="Wanessa Silva"
            />

            <Card
                title="Saúde Hormonal"
                text="Amet minim mollit non deserunt ullamco est sit aliqua 
                  dolor do amet sint. Velit officia consequat duis enim."
            />

            <Card
                title="Bem-estar Mental"
                text="Amet minim mollit non deserunt ullamco est sit aliqua 
                  dolor do amet sint. Velit officia consequat duis enim."
            />

            <Card
                title="Cuidados Pediátricos"
                text="Amet minim mollit non deserunt ullamco est sit aliqua 
                  dolor do amet sint. Velit officia consequat duis enim."
            />

            <Card
                title="Autoimune e Inflamação"
                text="Amet minim mollit non deserunt ullamco est sit aliqua 
                  dolor do amet sint. Velit officia consequat duis enim."
            />
            
            <Card
                title="Saúde do Coração"
                text="Amet minim mollit non deserunt ullamco est sit aliqua 
                  dolor do amet sint. Velit officia consequat duis enim."
            />
            
            <Card
                title="Bem-estar Mental"
                text="Amet minim mollit non deserunt ullamco est sit aliqua 
                  dolor do amet sint. Velit officia consequat duis enim."
            />

            <Card
                title="Problemas Digestivos"
                text="Amet minim mollit non deserunt ullamco est sit aliqua 
                  dolor do amet sint. Velit officia consequat duis enim."
            />

          </div>
        </div>
      </div>
    </section>

    <section id="contact">
      <div className="wrapper">
        <div className="col-a">
          <header>
            <h2>Entre em contato com a gente!</h2>
          </header>

          <div className="content">
            <ul>
              <li>
                <PinpointIco />

                R. Amauri Souza, 346
              </li>
              <li>
                <MailIco />

                contato@doctorcare.com
              </li>
            </ul>

            <a
              className="button"
              href="https://wa.me/5511987654321"
              target="_blank"
            >
              <WhatsappIco />

              Agende sua consulta
            </a>
          </div>
        </div>

        <div className="col-b">
          <img
            src="./src/assets/homem-negro-com-moletom-bege-mexendo-no-celular.png"
            alt="Homem negro com moletom bege mexendo no celular e sorrindo"
          />
        </div>
      </div>
    </section>

    <footer>
      <div className="wrapper">
        <div className="col-a">
          <a className="logo" href="#home">
            <BrandLogo />
          </a>

          <p>
            ©2022 DoctorCare. <br />
            Todos os direitos reservados.
          </p>
        </div>

        <div className="col-b">
          <SocialLinks />
        </div>
      </div>
    </footer>

    <a id="backToTopButton" href="#home">
      <UpArrow />
    </a>
    </>
  )
}
