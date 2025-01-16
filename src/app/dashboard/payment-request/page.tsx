import CheckoutForm from '@/app/components/CheckoutForm'
//import EasyCheckOut from '@/app/components/EasyCheckOut'
import LandingGUI from '@/app/components/LandingGUI'

const page = () => {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Payment Request</h1>
      </div>
      <div>
        {/* <CheckoutForm
          amount={10}
          orderRefNum="1054"
          postBackURL="https://findtute.com/dashboard/payment-request"
          storeId={664939}
        /> */}
        {/* <EasyCheckOut /> */}
        <LandingGUI />
      </div>
    </>
  )
}

export default page
