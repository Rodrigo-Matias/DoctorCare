import { CheckIco } from "../assets/SvgImageDump";

interface CardProps {
  title: String,
  text: String,
}
export function Card(props: CardProps) {
  return (
    <div className="card">
      <CheckIco />

      <h3>{ props.title }</h3>
      <p> { props.text }</p>
    </div>
  )
}