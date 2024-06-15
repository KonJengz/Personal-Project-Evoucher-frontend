import CloseVoucherItem from "./CloseVoucherItem";

export default function CloseVoucher({closeVoucher, getSelectVoucher}) {
  return (
    <div className="flex gap-5">
    { closeVoucher?.map((item) => (
      <CloseVoucherItem getSelectVoucher={() => getSelectVoucher()}  key={item.id} closeVoucher={item} />
    ))}
    </div>
  )
}
