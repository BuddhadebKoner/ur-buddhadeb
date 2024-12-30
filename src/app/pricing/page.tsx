import PriceingCard from "@/components/shared/PriceingCard";
import Head from "next/head";

const pricingData = [
   {
      title: 'Basic',
      description: 'Portfolio type showcase websites',
      price: '₹ 3,999',
      condition: 'one time',
      features: [
         { text: 'Free Domain for 1 Year', icon: '/icons/right.svg' },
         { text: 'Hosting Included', icon: '/icons/right.svg' },
         { text: 'Mobile-Friendly', icon: '/icons/right.svg' },
         { text: 'Ongoing Support', icon: '/icons/cross.svg' },
         { text: 'Admin Panel', icon: '/icons/cross.svg' },
         { text: 'Database Included', icon: '/icons/right.svg' },
         { text: 'Scalable Server', icon: '/icons/right.svg' }
      ]
   },
   {
      title: 'Standard',
      description: 'E-commerce websites with additional features',
      price: '₹ 7,999',
      condition: 'one time',
      features: [
         { text: 'Free Domain for 1 Year', icon: '/icons/right.svg' },
         { text: 'Hosting Included', icon: '/icons/right.svg' },
         { text: 'Mobile-Friendly', icon: '/icons/right.svg' },
         { text: 'Ongoing Support', icon: '/icons/right.svg' },
         { text: 'Admin Panel', icon: '/icons/right.svg' },
         { text: 'Database Included', icon: '/icons/right.svg' },
         { text: 'Advanced Security', icon: '/icons/cross.svg' }
      ]
   },
   {
      title: 'Premium',
      description: 'Full-fledged business websites with custom integrations',
      price: '₹ 15,999',
      condition: 'one time',
      features: [
         { text: 'Free Domain for 1 Year', icon: '/icons/right.svg' },
         { text: 'Hosting Included', icon: '/icons/right.svg' },
         { text: 'Mobile-Friendly', icon: '/icons/right.svg' },
         { text: 'Ongoing Support', icon: '/icons/right.svg' },
         { text: 'Admin Panel', icon: '/icons/right.svg' },
         { text: 'Database Included', icon: '/icons/right.svg' },
         { text: 'Custom Integrations', icon: '/icons/cross.svg' }
      ]
   }
];


export default function pricing() {
   return (
      <>
         <Head>
            <title>My page title</title>
            <meta property="og:title" content="My page title" key="title" />
         </Head>
         <div className="w-full h-full flex flex-col bg-[#F9FAFB]">
            <div className="w-full bg-[url('/levelBg.jpg')] py-3 lg:py-2">
               <div className="container mx-auto flex justify-between items-center px-4 lg:px-16">
                  <h1 className="text-white font-semibold text-xs lg:text-sm">All price is base starting ,it will vary upon website requirement .</h1>
               </div>
            </div>

            <div className="w-full lg:py-10 py-5">
               <div className="container mx-auto flex justify-evenly items-center px-4 lg:px-16 flex-wrap">
                  {pricingData.map((plan, index) => (
                     <PriceingCard key={index} plan={plan} />
                  ))}
               </div>
            </div>
         </div>
      </>
   );
}
