/* eslint-disable-next-line import/no-anonymous-default-export */
import Link from 'next/link'
import { Form } from './Form'
import { Description, Section, Title } from '../../styles/styles'
import { ContainerContact, ContactContent } from './styles'
import { BsWhatsapp } from 'react-icons/bs'
import { Envelope, TelegramLogo } from 'phosphor-react'

export function Contact() {
  return (
    <Section>
      <Title>
        <p>../contact</p>
        Contato
        <span>
          <Envelope /> Contact
        </span>
      </Title>
      <Description>
        Estou sempre aberto a novas oportunidades de trabalho ou colaborando em
        alguns novos projetos incríveis. Basta preencher o formulário que
        retornarei 💪
      </Description>

      <ContainerContact>
        <ContactContent>
          <div className="contact-content">
            <h4>
              <BsWhatsapp size={22} color="#00fffb" /> WhatsApp{' '}
            </h4>
            <Link href="https://api.whatsapp.com/send?phone=5569999523234">
              <a target="_blank">
                <span>+55 69 99952-3234</span>
              </a>
            </Link>
          </div>

          <div className="contact-content">
            <h4>
              {' '}
              <TelegramLogo size={22} color="#00fffb" /> Email{' '}
            </h4>
            <Link href="mailto:patrikmagalhaes@icloud.com">
              <a target="_blank">
                <span>patrikmagalhaes@icloud.com</span>
              </a>
            </Link>
          </div>
        </ContactContent>

        <Form />
      </ContainerContact>
    </Section>
  )
}
