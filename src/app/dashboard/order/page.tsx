import Handshake from '@/app/components/Handshake'

const Order = ({ params }: { params: { id: string } }) => {
  const { id } = params

  return (
    <div>
      <h1>Place Order</h1>
      <Handshake />
    </div>
  )
}

export default Order
