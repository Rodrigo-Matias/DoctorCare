import { UserCircle } from "phosphor-react";
import { AspasIco } from "../assets/SvgImageDump";

interface TestimonialProps {
  text: String,
  subscriptorName?: String,
  avatarSrc?: string,
}
export function Testimonial(props: TestimonialProps) {
  return (
    <div className="card">
      <AspasIco />

      <p> { props.text }</p>
      <div>
        { props.avatarSrc ? <img src={ props.avatarSrc } alt="" /> : <UserCircle /> }
        <span>
          { props.subscriptorName ? props.subscriptorName : "Anônimo" }
        </span>
      </div>
    </div>
  )
}