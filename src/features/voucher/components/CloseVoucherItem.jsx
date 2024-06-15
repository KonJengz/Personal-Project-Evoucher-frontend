import { useParams } from "react-router-dom"
import voucherApi from "../../../api/voucher"
import Button from "../../../components/Button"

export default function CloseVoucherItem({ closeVoucher, getSelectVoucher}) {

    const params = useParams()

    const handleClickCloseStatusVoucher = async () => {
        try {
            const updateStatusVoucher = {
                id: closeVoucher.id,
                statusVoucher: true}
            await voucherApi.updateDataVoucher(updateStatusVoucher, params.id)
            getSelectVoucher()
        } catch (error) {
            console.log('error', error)
        }
    }

  return (
    <div className="max-w-52">
      <div role="button" className="relative">
        <div className="rounded-2xl overflow-hidden">
            <img className="w-full" src={closeVoucher?.imageVoucher} alt={closeVoucher?.nameVoucher} />
        </div>
        <button onClick={handleClickCloseStatusVoucher} className="absolute top-0 right-2">&#10005;</button>
        <h3 className="text-xs px-2 pt-2">{closeVoucher?.nameVoucher}</h3>

        { closeVoucher ? <div className="pt-2">
          <Button width="full" onClick={handleClickCloseStatusVoucher} border="green" color="black">use voucher</Button>
        </div> : null }
        
      </div>
    </div>
  )
}
