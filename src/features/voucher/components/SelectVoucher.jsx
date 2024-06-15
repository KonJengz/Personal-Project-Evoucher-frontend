import { useState } from "react";
import voucherApi from "../../../api/voucher";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SelectVoucherItem from "./SelectVoucherItem";

export default function SelectVoucher({findSelectVoucher, getSelectVoucher}) {


  console.log('findSelectVoucher', findSelectVoucher)
  return (

    <div className="flex gap-5">
    { findSelectVoucher?.map((item) => (
      <SelectVoucherItem getSelectVoucher={() => getSelectVoucher()}  key={item.id} findSelectVoucher={item} />
    ))}
    </div>
    
  )
}
