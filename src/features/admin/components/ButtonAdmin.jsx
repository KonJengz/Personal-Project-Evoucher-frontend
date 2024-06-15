

const bgMap = {
    green: 'bg-[#2BB673] hover:bg-green-600',
    gray: 'bg-gray-200',
    red: 'bg-red-400 hover:bg-red-500'
}

const colorMap = {
    white: 'text-white',
    black: 'text-[#3A3A3A]'
}

const borderMap = {
    green: 'border border-[#2BB673]',
    gray: 'border border-gray-200'
}

export default function ButtonAdmin({children, bg='bg-[#2BB673]', color='text-white', border='none', onClick}) {
  return (
    <button onClick={onClick} className={` py-0.5 px-5 rounded-lg ${bgMap[bg]} ${colorMap[color]} ${borderMap[border]}`}>{children}</button>
  )
}
