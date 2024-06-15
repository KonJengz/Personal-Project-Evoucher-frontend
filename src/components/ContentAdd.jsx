import CardContent from "./CardContent";
import imgContent1 from '../assets/contents/Col_image_01_1efd1fb985.png'
import imgContent2 from '../assets/contents/Col_image_02_ea32df9f06.png'
import imgContent3 from '../assets/contents/Col_image_03_65e60eb2b8.png'

export default function ContentAdd() {

    const content = [
        {
            id: 1,
            hend: 'ออกออเดอร์ รับชำระเงินได้ทันที',
            text: `เปิดบัญชี LINE Oficial Account เพื่อเข้าใช้ MyShop และสื่อสารโปรโมชั่นกับผู้ติดตามร้านค้า`,
            url: imgContent1
        },
        {
            id: 2,
            hend: 'กระตุ้นยอดขายด้วยฟีเจอร์คูปองส่วนลด',
            text: 'สร้างคูปองโปรโมชัน ดันยอดขาย',
            url: imgContent2
        },
        {
            id: 3,
            hend: 'โอกาสโปรโมตและขายบน LINE SHOPPING',
            text: 'เพิ่มฐานลูกค้าบนช่องทางใหม่ สร้างรายได้เพิ่ม',
            url: imgContent3
        },

    ]

  return (
    <div className="flex items-center flex-col my-5">
        <h1 className="text-2xl font-semibold">ตัวช่วยการขายบน LINE SHOPPING ที่ทุกร้านค้าออนไลน์ต้องมี</h1>
        <div className="flex w-[60rem] gap-10 justify-center m-8">
            { content.map((item) => (
                <CardContent key={item.id} head={item.hend} text={item.text} url={item.url} />
            )) }
        </div>
    </div>
  )
}
