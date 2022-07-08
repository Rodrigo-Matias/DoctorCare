interface StatProps {
  indice: String,
  text: String,
}
export function Stat(props: StatProps) {
  return (
    <div className="stat">
      <h3>{ props.indice }</h3>
      <p> { props.text }</p>
    </div>
  )
}