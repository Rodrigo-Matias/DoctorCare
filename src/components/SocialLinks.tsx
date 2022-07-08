import { FacebookIco, InstagramIco, YoutubeIco } from "../assets/SvgImageDump";

export function SocialLinks() {
  return (
    <>
      <ul className="social-links">
        <li>
          <a target="_blank" href="https://instagram.com/maykbrito"
            ><InstagramIco />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://facebook.com/maykbrito">
            <FacebookIco />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://youtube.com/maykbrito">
            <YoutubeIco />
          </a>
        </li>
      </ul>
    </>
  )
}