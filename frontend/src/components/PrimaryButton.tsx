interface PrimaryButtonProps {
  name: string
}

export function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <button type="button" className="primaryButton">
      {props.name}
    </button>
  )
}
