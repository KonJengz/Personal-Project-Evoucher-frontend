import mobile from '../assets/voucher.png'
import ContentAdd from '../components/ContentAdd'

export default function HomePage() {
  return (
    <div>
        <main className='flex items-center justify-center'>
            <div className='w-[30rem]'>
                <img src={mobile} alt="voucher" />
            </div>
            <div className='w-[30rem] -ml-20'>
                <h1 className='text-7xl font-semibold italic'>E-voucher</h1>
                <p>กลยุทธ์การตลาดในยุคดิจิทัล ที่ให้ผลลัพท์ที่คาดไม่ถึง ตอบโจทย์ผู้ใช้งาน<br />ใช้ง่าย ไม่ยุ่งยาก ไม่ต้องโหลดแอปพลิเคชั่นใดๆ</p>
            </div>
        </main>
        <ContentAdd />
    </div>
  )
}
