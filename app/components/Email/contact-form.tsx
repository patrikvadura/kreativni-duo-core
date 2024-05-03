type EmailTemplateProps = { name: string; email: string; message: string }

export const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => (
  <div>
    <p>
      <b className="font-bold">Čau holky máte nový email!</b>
    </p>
    <p>
      Z vašich webových stránek vám byl odeslán nový email od{' '}
      <b className="font-bold">
        {name} | {email}
      </b>
      . Obsah zprávy naleznete níže:
    </p>

    <p>
      <b className="font-bold">Zpráva:</b>
    </p>

    <p>{message}</p>

    <p>Přeji hezký zbyetk dne!</p>
  </div>
)
