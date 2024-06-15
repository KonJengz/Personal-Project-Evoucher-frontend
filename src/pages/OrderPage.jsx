import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useOrder from "../hooks/useOrder";
import Button from "../components/Button";
import orderApi from "../api/order";
import OrderItem from "../features/voucher/components/OrderItem";

export default function OrderPage() {

  const { fetchOrder, getAllVoucher } = useOrder();

  const [isClick, setIsClick] = useState("");
  const [ getOrder, setGetOrder ] = useState([])

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      console.log("params.id", params.id);
      fetchOrder(params.id);
    }
  }, [params.id]);

  const handleClickVoucher =  async (numberVoucher) => {
    setIsClick(numberVoucher);
    const res = await orderApi.getOrderByStoreId(numberVoucher)
    console.log(res.data)
    setGetOrder(res.data)
  };

  console.log("getAllOrder getOrder", getOrder);

  return (
    <div className="p-4 w-full">
      <div className="flex items-start gap-2">
        {getAllVoucher?.map((item) => {
          return isClick === item.numberVoucher 
          ? (
            <Button key={item.id} onClick={()=>handleClickVoucher(item.numberVoucher)} bg="green">
              {item.nameVoucher}
            </Button>
            
          ) : (
            <Button key={item.id} onClick={()=>handleClickVoucher(item.numberVoucher)} bg="none" color="black" border="green">
              {item.nameVoucher}
            </Button>
          );
        })}
      </div>
      
      <div className="mt-4">
        <div className="flex justify-around border-b-gray-300 border-b font-semibold text-sm py-3">
                  <h3 className="basis-40 text-center">order number</h3>
                  <h3 className="flex-1">ชื่อลูกค้า</h3>
                  <h3 className="basis-40 text-center">voucher number</h3>
                  <h3 className="basis-40 text-center">สาขาที่ใช้</h3>
                  <h3 className="basis-40 text-center">เวลาที่ได้รับ voucher</h3>
                  <h3 className="basis-40 text-center">การใช้ voucher</h3>
              </div>
        <div className="mt-2">
          { getOrder?.map((item) => (
            <OrderItem key={item.id} getOrder={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
