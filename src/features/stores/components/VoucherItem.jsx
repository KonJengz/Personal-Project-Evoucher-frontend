

export default function VoucherItem({ onClick, data, selectVoucher}) {

  return (
    <div onClick={(e)=> {
      e.stopPropagation()
      onClick(data)
    }} role="button" className={`rounded-2xl p-2 hover:shadow-[0_0px_13px_1px_rgba(0,0,0,0.2)] basis-1/4 ${ selectVoucher?.id === data?.id ? "shadow-[0_0px_8px_2px_rgba(0,0,0,0.2)]" : '' }`}>
        <div className="rounded-2xl overflow-hidden">
            <img className="w-full" src={data?.imageUrls[3] || data?.imageUrls[0]} alt={data?.name} />
        </div>
        <h3 className="text-sm px-2 pt-2">{data?.name}</h3>
    </div>
  )
}
