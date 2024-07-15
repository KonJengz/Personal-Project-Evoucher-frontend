import { setAccessVoucherId } from "../../../utils/local-storage";
import CloseVoucherItem from "./CloseVoucherItem";


export default function CloseVoucher({closeVoucher, getSelectVoucher}) {
  return (
    <div className="flex gap-5">
    { closeVoucher?.map((item) => ( //voucher ที่ปิดการใช้งาน
      <CloseVoucherItem getSelectVoucher={() => {
        getSelectVoucher()
        setAccessVoucherId(item.numberVoucher)
      }}  key={item.id} closeVoucher={item} />
    ))}
    </div>
  )
}
