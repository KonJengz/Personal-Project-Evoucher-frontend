const bgMap = {
    green: 'bg-[#2BB673]',
    gray: 'bg-gray-200',
    greenDrop: 'bg-[#caf3df]'
}

const colorMap = {
    white: 'text-white',
    black: 'text-[#3A3A3A]',
    green: 'text-[#2BB673]'
}

const borderMap = {
    green: 'border border-[#2BB673]',
    gray: 'border border-gray-200'
}

const widthMap = {
    full: 'w-full',
    60: 'w-60',
    40: 'w-40'
}

export default function Button({
    children, bg='none',
    color='white', border='none',
    width="w-full", onClick , type="submit"}) {

    return (
        <button
            onClick={onClick}
            className={`px-4 py-1.5 font-light rounded-full ${bgMap[bg]} ${colorMap[color]} ${widthMap[width]} ${borderMap[border]} hover:underline`} type={type}>{children}</button>
      )
}
