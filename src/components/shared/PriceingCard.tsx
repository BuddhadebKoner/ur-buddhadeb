import Image from "next/image";

export default function PriceingCard({
   plan,
   onGetStartedClick,
}: {
   plan: {
      title: string;
      description: string;
      discountedPrice: number;
      originalPrice: number;
      discount: number;
      features: { text: string; icon: string }[];
   };
   onGetStartedClick: (title: string) => void;
}) {
   return (
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-xs w-full mt-5">
         <h2 className="text-2xl font-semibold text-start text-gray-800 dark:text-white">{plan.title}</h2>
         <p className="text-start text-gray-600 dark:text-gray-400 mb-4">{plan.description}</p>
         <h3 className="text-xl font-bold text-start text-gray-800 dark:text-white mb-6">
            <span className="line-through text-red-400 dark:text-red-500 mr-2">₹{plan.originalPrice}</span>
            ₹{plan.discountedPrice}
            <span className="text-sm text-green-600 dark:text-green-400 ml-2">({plan.discount}% OFF)</span>
         </h3>
         <div className="space-y-4">
            {plan.features.map((feature, index) => (
               <div key={index} className="flex items-center space-x-2">
                  <Image width={20} height={20} src={feature.icon} alt="icon" className="w-4 h-4" />
                  <p className="text-gray-600 dark:text-gray-400">{feature.text}</p>
               </div>
            ))}
         </div>
         <button
            onClick={() => onGetStartedClick(plan.title)}
            className="mt-6 w-full bg-blue-600 dark:bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800"
         >
            Get Started
         </button>
      </div>
   );
}
