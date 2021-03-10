interface PrimaryButtonProps {
  nome: string
}

export function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <div className="container">
      <button type="button" className="primaryButton">
        <span>{props.nome}</span>
      </button>
    </div>
  )
}
