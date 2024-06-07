
export default function CardContent(props) {
    const { head, text, url } = props
  return (
    <div>
        <div className="w-72 rounded-2xl overflow-hidden mb-4">
            <img src={url} alt="content" />
        </div>
        <h3 className="text-xl text-center mb-2">{head}</h3>
        <p className="text-gray-400 text-sm text-center">{text}</p>
    </div>
  )
}
