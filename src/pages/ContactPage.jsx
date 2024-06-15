import imgContact from '../assets/contact/contact.svg' 
import social01 from '../assets/contact/social01.svg' 
import social02 from '../assets/contact/social02.svg' 
import social03 from '../assets/contact/social03.svg' 

export default function ContactPage() {
  return (
<main  className="w-9/12 p-8 mx-auto h-[48rem]">
  <div className='flex items-center justify-center gap-7'>
    <div className="flex flex-col ml-2 gap-4">
      <h1 className="text-4xl">ติดต่อทีมงาน</h1>
      <p><strong>Mobile:</strong> 0959895464</p>
      <p><strong>Email:</strong> info@konjeng.com</p>
      <p><strong>Address:</strong> เลขที่ 2 ถนน ลาดพร้าว ซอย ลาดพร้าว 17<br />แขวง จอมพล เขต จตุจักร กรุงเทพมหานคร 10900,</p>

      <div className='flex gap-3 mt-1'>
        <div className='w-11'>
          <img src={social01} alt="social facebook" />
        </div>
        <div className='w-11'>
          <img src={social02} alt="social message" />
        </div>
        <div className='w-11'>
          <img src={social03} alt="social line" />
        </div>
      </div>
    </div>
    <div className='w-96'>
      <img src={imgContact} alt="imgContact" />
    </div>
  </div>
</main>
  )
}
