# Expertise Engenharia — novo site

Site institucional em Next.js, responsivo e preparado para publicação na Vercel.

## Páginas

- `/` — Home
- `/locacao-de-equipamentos`
- `/monitoramento-e-avaliacao`
- `/estudos-e-implementacao`
- `/instalacoes-eletricas`

## Rodar localmente

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abra `http://localhost:3000`.

## WhatsApp

O número é controlado por `NEXT_PUBLIC_WHATSAPP_NUMBER` em `.env.local`, no formato internacional sem símbolos. Exemplo:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5519997988672
```

## Formulário

O formulário aceita duas formas de integração:

### Opção 1 — Resend (recomendado para Vercel)

```env
CONTACT_TO_EMAIL=contato@expertise-eng.com.br
RESEND_API_KEY=re_xxxxxxxxx
RESEND_FROM_EMAIL=site@seudominio.com.br
```

O domínio do remetente precisa estar validado no Resend.

### Opção 2 — Webhook/CRM

```env
CONTACT_WEBHOOK_URL=https://seu-webhook
```

Se `CONTACT_WEBHOOK_URL` estiver definido, os leads são enviados em JSON para esse endpoint.

## Publicar na Vercel

1. Criar um repositório no GitHub e subir este projeto.
2. Importar o repositório na Vercel.
3. Configurar as variáveis de ambiente.
4. Publicar primeiro em um endereço temporário da Vercel.
5. Após aprovação, apontar o domínio `expertise-eng.com.br` para a Vercel sem alterar os registros de e-mail do Terra.

## Próximas extensões

A estrutura foi criada para facilitar novas landing pages de Google Ads. O caminho mais natural é criar `/locacao-analisador-de-energia` como LP dedicada, sem menu e com foco exclusivo em conversão.
