import GradePagination from '@/app/components/grades/GradePagination'
import { getAdminPayments } from '@/app/lib/getUserPayments'
import React from 'react'

interface Payments {
  status: boolean
  message: string
  data: {
    data: [
      {
        id: string
        customer_name: string
        order_id: string
        transaction_id: string
        amount: number
        package: string
        status: string
      }
    ]
    pageData: {
      total: number
      perPage: number
      currentPage: number
      lastPage: number
    }
  }
}

const Payments = async ({
  searchParams,
}: {
  searchParams: { page: string }
}) => {
  const page = searchParams?.page
  const allPayments: Payments = await getAdminPayments(+page)

  console.log('allPayments', allPayments)

  return (
    <div>
      <div className="flex justify-between w-full items-center gap-2 p-2 mb-4">
        <div>
          <h1 className="text-3xl font-bold">All Payments</h1>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-base-200 text-black font-bold text-lg">
              <th>Sr#</th>
              <th>Name</th>
              <th>Order Id</th>
              <th>Transaction Id</th>
              <th>Amount</th>
              <th>Package</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allPayments?.data.data?.map((payment, index) => (
              <tr className="" key={payment.id}>
                <th>
                  {(allPayments?.data.pageData?.currentPage - 1) *
                    allPayments?.data.pageData?.perPage +
                    index +
                    1}
                </th>
                <td>{payment.customer_name}</td>
                <td>{payment.order_id}</td>
                <td>{payment.transaction_id}</td>
                <td>{payment.amount}</td>
                <td>{payment.package}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center">
        <GradePagination pageData={allPayments.data.pageData} />
      </div>
    </div>
  )
}

export default Payments
