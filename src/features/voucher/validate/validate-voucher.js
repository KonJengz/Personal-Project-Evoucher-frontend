const validateVoucher = (input) => {
    const result = {}
console.log('----input.startDate', input)
    if (input.startDate === '') {
        result.startDate = 'กรุณาใส่วันที่เริ่มใช้งาน voucher ได้'
    }
    if (input.endDate === '') {
        result.endDate = 'กรุณาใส่วันที่สิ้นสุดใช้งาน voucher ได้'
    }
    return result
}

export default validateVoucher