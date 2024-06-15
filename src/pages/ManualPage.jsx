import manual1 from '../assets/manuals/manual1.png'
import manual2 from '../assets/manuals/manual2.png'
import manual3 from '../assets/manuals/manual3.png'
import manual4 from '../assets/manuals/manual4.png'

export default function ManualPage() {
  return (
    <main  className="w-9/12 mx-auto p-8">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl text-center leading-[3rem]">การเชื่อมต่อระบบ<br />Line Shopping กับ Voucher Launcher</h1>
        <div>
          <div className='w-full rounded-2xl overflow-hidden mb-4 shadow-md'>
            <img src={manual1} alt="manual" />
          </div>
          <p className='px-7'>1. ก่อนเริ่มการเชื่อมต่อให้เลือกเมนู &ldquo;อีคอมเมิร์ซ&ldquo; ไปที่ “ตั้งค่าร้านค้า” กดที่ปุ่มแชร์ร้านค้า กดคัดลอกลิ้งก์ แล้วนำลิ้งร้านค้าที่คัดลอกมาวางใน หน้าตั้งค่าของ fastervoucher account ของคุณลูกค้า ในหัวข้อ Line shopping URL</p>
        </div>

        <div>
          <div className='w-full rounded-2xl overflow-hidden mb-4 shadow-md'>
            <img src={manual3} alt="manual" />
          </div>
          <p className='px-7'>2. จากนั้นเข้า LINE SHOPPING เลือกที่เมนู &ldquo;อีคอมเมิร์ซ&ldquo; ไปที่ “ตั้งค่าร้านค้า” เลือก MyShop Open API</p>
        </div>

        <div>
          <div className='w-full rounded-2xl overflow-hidden mb-4 shadow-md'>
            <img src={manual4} alt="manual" />
          </div>
          <p className='px-7'>3. กดปุ่ม Create Webhook ตั้งชื่อ การเชื่อมต่อ เช่น fastervoucher webhook และนำค่าที่ได้จากข้อ 2 ใส่ใน Webhook URL ติ๊กถูกช่อง I accept และกดปุ่ม Save</p>
        </div>

        <p className='px-7'>4. เมื่อกด save จะปรากฏ webhook ใหม่ที่ทำการสร้างขึ้นมาให้ กดปุ่ม Edit และ COPY Secret Key</p>
        <p className='px-7'>5. กลับไปเข้าที่ Vouhcer Launcher เพื่อ นำค่าที่ได้ของ Secret KEY ใน LINE SHOPPING กลับมาใส่</p>

        <div>
          <div className='w-full rounded-2xl overflow-hidden mb-4 shadow-md'>
            <img src={manual2} alt="manual" />
          </div>
          <p className='px-7'>6. กลับเข้าที่เมนู &ldquo;อีคอมเมิร์ซ&ldquo; เลือก Manage API Keys &gt; Generate &gt; ตั้งชื่อ API Key Name เช่น fastvoucher-key</p>
        </div>

        <p className='px-7'>7. หลังจาก กดปุ่ม Generate จะได้ API-KEY ให้ทำการ COPY ตามรูปเพื่อกลับมากรอกใน ตั้งค่า ของ Voucher Launcher และกดปุ่ม บันทึก</p>
      </div>
    </main>
  )
}
