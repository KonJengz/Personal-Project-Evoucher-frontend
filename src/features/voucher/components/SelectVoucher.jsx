import SelectVoucherItem from "./SelectVoucherItem";

export default function SelectVoucher({findSelectVoucher, getSelectVoucher}) {

  return (

    <div className="flex gap-5">
    { findSelectVoucher?.map((item) => (
      <SelectVoucherItem getSelectVoucher={() => getSelectVoucher()}  key={item.id} findSelectVoucher={item} />
    ))}
    </div>
    
  )
}
