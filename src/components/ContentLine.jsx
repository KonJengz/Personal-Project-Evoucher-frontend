import contentImg from '../assets/contents/lineshopping.png'

export default function ContentLine() {
  return (
    <div className="flex items-center flex-col my-5">
        <div className="flex w-[55rem] gap-10 justify-center m-4 my-10 items-center">

            <div>
                <h1 className="text-2xl font-semibold mb-4">ตัวช่วยการขายบน LINE SHOPPING ที่ทุกร้านค้าออนไลน์ต้องมี</h1>
                <p>อัปเกรดร้านค้า ช่วยให้บริหารอย่างเป็นระบบด้วยเครื่องมือช่วยอำนวยความสะดวก ให้ลูกค้าซื้อของใน LINE SHOPPING ได้ง่ายๆ ผ่าน MyShop ที่ตอบโจทย์ทุกการขายได้อย่างครอบคลุม</p>
            </div>

            <div className='w-[70rem]'>
                <img className='w-full' src={contentImg} alt="" />
            </div>
        </div>
    </div>
  )
}
