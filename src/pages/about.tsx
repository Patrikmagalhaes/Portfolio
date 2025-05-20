import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { Links } from '../components/Links'
import { BiUserPin } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsLinkedin } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { FaDiscord } from 'react-icons/fa'
import * as S from '../styles/about'
import { ButtonAlt, Section, Title } from '../styles/styles'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Evander Inácio </title>
        <meta
          name="description"
          content="Meu nome é Patrik Magalhães, sou um desenvolvedor front-end React"
        />
        <meta property="og:title" content="About | Evander Inácio" />
        <meta
          property="og:description"
          content="Meu nome é Patrik Magalhães, sou um desenvolvedor front-end React"
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <S.AboutContainer>
          <Title>
            <p>../about</p>
            Sobre
            <span>
              <BiUserPin /> About
            </span>
          </Title>

          <S.AboutContent>
            <S.AboutImage>
              <img
                className="AboutImg"
                src="/patrik.jpeg"
                alt="Imagem de perfil patrik"
              />

              <div className="links">
                <ul>
                  <Link href={'https://github.com/patrikmagalhaes'}>
                    <a target="_blank" aria-label="Link para o Github">
                      <AiFillGithub size={25} /> @patrikmagalhaes
                    </a>
                  </Link>
                  <Link href={'https://www.linkedin.com/in/patrikmagalhaes'}>
                    <a target="_blank" aria-label="Link para o Linkedin">
                      <BsLinkedin size={25} />  @patrikmagalhaes
                    </a>
                  </Link>
                  <Link
                    href={'https://api.whatsapp.com/send?phone=5569999523234'}
                  >
                    <a target="_blank" aria-label="Link para o WhatsApp">
                      <RiWhatsappFill size={25} /> +55 69 99952-3234
                    </a>
                  </Link>

                  <Link href={'mailto:patrikmagalhaes@icloud.com'}>
                    <a
                      className="email"
                      target="_blank"
                      aria-label="Link para o email"
                    >
                      <GrMail size={25} /> patrikmagalhaes@icloud.com
                    </a>
                  </Link>
                </ul>
              </div>

              <S.AboutContact>
                <h3>
                  Vamos conversar, quem sabe criar um projeto incrível juntos?
                </h3>
                <p>Me mande uma mensagem! 😉</p>
                <Link href={'/contact'}>
                  <a>
                    <ButtonAlt>Contato</ButtonAlt>
                  </a>
                </Link>
              </S.AboutContact>
            </S.AboutImage>
            <S.AboutDescription>
              <p>
                Minha jornada começou cedo: aos 16 anos, iniciei no mercado de trabalho com atendimento ao cliente — uma experiência que moldou minha forma de me comunicar e entender pessoas. Sou de Rondônia e, em 2022, me mudei para São José, SC, em busca de novas oportunidades e crescimento profissional.

              </p>

              <p>
                Trabalhei no McDonalds, onde aprendi na prática sobre agilidade, pressão e trabalho em equipe. Depois, passei por empresas como a Komeco e a Sterilab, onde atuei com controle de qualidade, processos administrativos e organização de dados. Cada etapa me ensinou algo novo e me preparou para o que viria a seguir.
              </p>
              <p>
                Hoje, com 23 anos(2025) e cursando Ciência da Computação, atuo como Desenvolvedor Front-end freelancer. Minha transição para a tecnologia se concretizou no estágio na Avanti, onde desenvolvi e mantive e-commerces usando React, JavaScript e TypeScript.
              </p>
              <p>Desde então, venho criando sites completos — do layout no Figma à entrega final — sempre focado em responsividade, performance e uma boa experiência do usuário. Construo soluções digitais com olhar técnico e sensibilidade para o que o cliente realmente precisa.</p>
            </S.AboutDescription>
          </S.AboutContent>
        </S.AboutContainer>
      </Section>
      <Footer />
    </>
  )
}
