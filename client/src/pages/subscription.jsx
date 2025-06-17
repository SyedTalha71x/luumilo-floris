export default function SubscriptionPage() {
  return (
    <div className="h-full bg-[#FFFFFF] space-y-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white rounded-lg border border-[#E2E4E9] p-6 md:p-8">
          <h2 className="text-xl text-gray-950 mb-6 inter-tight-400">Subscription details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="text-sm text-gray-600 mb-1 inter-tight-400">Subscription Status</div>
              <div className="text-base font-medium text-gray-900 inter-tight-400">Active</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1 inter-tight-400">Package</div>
              <div className="text-base font-medium text-gray-900 inter-tight-400">No</div>
            </div>
          </div>

          <hr className="border-gray-200 mb-6" />

          <div className="space-y-3">
            <button className="px-6 py-2 border border-[#8F8F8F] rounded-xl text-[#8F8F8F] cursor-pointer  ">
              Cancel Subscription
            </button>
            <p className="text-sm text-[#B5B5B5] inter-tight-400">
              Your Subscription Will Remain Active Until The End Of The You Current Billing Period.
            </p>
          </div>
        </div>  

        <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8">
          <h2 className="text-xl text-[#000000] mb-6 inter-tight-400">Billing History</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="text-sm text-gray-600 mb-1 inter-tight-400">Final Payment</div>
              <div className="text-base font-medium text-gray-900 inter-tight-400">$99.99</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1 inter-tight-400">Date Of Activation</div>
              <div className="text-base font-medium text-gray-900 inter-tight-400">June 4 2025, Paid</div>
            </div>
          </div>

          <hr className="border-gray-200 mb-4" />

          <p className="text-sm text-[#B5B5B5] inter-tight-400">Please Contact Customer Service For Detailed Billing History</p>
        </div>
      </div>
    </div>
  )
}
