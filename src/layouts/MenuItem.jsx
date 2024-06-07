import { Link } from "react-router-dom";

export default function MenuItem({ active, text, to }) {
  return (
    <Link to={to} className={`${active ? 'hover:no-underline' : ''}`}>
        <div className={`${active ? 'text-[#2BB673]' : 'text-[#3A3A3A]'}`}>
            {text}
        </div>
    </Link>
  )
}
