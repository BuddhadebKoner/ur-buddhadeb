export default function PriceingCard({
   plan
}: {
   plan: {
      title: string;
      description: string;
      price: string;
      condition: string;
      features: { text: string; icon: string }[];
   };
}) {
   return (
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs w-full mt-5">
         <h2 className="text-2xl font-semibold text-start text-gray-800">{plan.title}</h2>
         <p className="text-start text-gray-600 mb-4">{plan.description}</p>
         <h3 className="text-xl font-bold text-start text-gray-800 mb-6">
            {plan.price} <span className="text-sm text-gray-500">{plan.condition}</span>
         </h3>
         <div className="space-y-4">
            {plan.features.map((feature, index) => (
               <div key={index} className="flex items-center space-x-2">
                  <img src={feature.icon} alt="icon" className="w-4 h-4" />
                  <p className="text-gray-600">{feature.text}</p>
               </div>
            ))}
         </div>
         <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Get Started
         </button>
      </div>
   );
}
