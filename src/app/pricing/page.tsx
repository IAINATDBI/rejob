import { ArrowRight } from "lucide-react"

export default function PricingBoard() {
  return (
    <div className="w-full px-4 py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">
        Unlock Your Potential with Our Flexible Token Plans
      </h2>
      <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3">
        {[
          { name: "Personal", price: "$9", tokens: "1,000" },
          { name: "Professional", price: "$29", tokens: "5,000" },
          { name: "Enterprise", price: "$99", tokens: "20,000" },
        ].map((plan) => (
          <div
            key={plan.name}
            className="flex flex-col p-6 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#ff3e4c]">{plan.name}</h3>
            <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-xl font-normal text-gray-500">/month</span></p>
            <ul className="mb-8 space-y-2 flex-grow">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#ff3e4c] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {plan.tokens} tokens per month
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#ff3e4c] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Access to all features
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#ff3e4c] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                24/7 support
              </li>
            </ul>
            <button className="w-full bg-[#ff3e4c] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out hover:bg-[#e0353f] focus:outline-none focus:ring-2 focus:ring-[#ff3e4c] focus:ring-opacity-50">
              Get Started <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}