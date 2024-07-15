import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useOrder from "../hooks/useOrder";
import Button from "../components/Button";
import orderApi from "../api/order";
import OrderItem from "../features/voucher/components/OrderItem";
import { getAccessVoucherId, setAccessVoucherId } from "../utils/local-storage";

const initialInput = {
  allOrder: 0,
  usedOrder: 0,
  notUsedOrder:0
}

export default function OrderPage() {

  const { fetchOrder, getAllVoucher } = useOrder();

  const [isClick, setIsClick] = useState(+getAccessVoucherId() || "");
  const [ getOrder, setGetOrder ] = useState([])
  const [ countOrder, setCountOrder] = useState(initialInput)

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      // console.log("params.id", params.id);
      fetchOrder(params.id);
    }

    if (getAccessVoucherId()){
      handleClickVoucher(+getAccessVoucherId())
    }

  }, [params.id]);

  useEffect(() => {
    fncountOrder()
  },[getOrder])

  const fncountOrder = () => {
    if (getAllVoucher?.length !== 0) {
      const usedOrder = getOrder.reduce((count, order) => {
        return order.statusUseVoucher === true ? count + 1 : count;
      }, 0)
  
      const notUsedOrder = getOrder.reduce((count, order) => {
        return order.statusUseVoucher === false ? count + 1 : count;
      }, 0)
      setCountOrder((prev) => ({...prev, allOrder : getOrder.length, usedOrder : usedOrder, notUsedOrder:notUsedOrder}))
    }
    
  }

  const handleClickVoucher =  async (numberVoucher) => {
    try {
      setIsClick(numberVoucher);
      const res = await orderApi.getOrderByStoreId(numberVoucher)
      setGetOrder(res.data)
      setAccessVoucherId(numberVoucher)
      fncountOrder()
      
    } catch (error) {
      console.log('error handleClickVoucher', error)
    }
  };

  return (
    <div className="p-4 w-full">

      <div className="flex mb-5 gap-2">
        <div className="border py-2 px-4 rounded-2xl text-center bg-gray-200">
          <h2>จำนวน E-voucher ทั้งหมด <strong>{`${countOrder.allOrder}`}</strong></h2>
        </div>
        <div className="border py-2 px-4 rounded-2xl text-center bg-gray-200">
          <h2>E-voucher ที่ยังไม่ได้มาใช้ <strong>{`${countOrder.notUsedOrder} (${ countOrder.allOrder ? (countOrder.notUsedOrder / countOrder.allOrder * 100).toFixed(2) : 0}%)`}</strong></h2>
        </div>
        <div className="border py-2 px-4 rounded-2xl text-center bg-gray-200">
          <h2>E-voucher ที่ใช้งานแล้ว <strong>{`${countOrder.usedOrder} (${ countOrder.allOrder ? (countOrder.usedOrder / countOrder.allOrder * 100).toFixed(2) : 0}%)`}</strong></h2>
        </div>
      </div>

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
                <h3 className="basis-36 text-center">สาขาที่ใช้</h3>
                <h3 className="basis-44 text-center">เวลาที่ได้รับ voucher</h3>
                <h3 className="basis-44 text-center">การใช้ voucher</h3>
            </div>
        <div className="mt-2">
          { getOrder?.map((item) => {
            return getAllVoucher?.some((item) => item.storeId === +params.id)
            ? <OrderItem key={item.id} getOrder={item} />
            : null
          }
            
          )}
        </div>
      </div>
    </div>
  );
}
