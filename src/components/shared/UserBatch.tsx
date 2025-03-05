import Image from "next/image";

export default function UserBatch({
   user,
}: {
   user: {
      portfolio: string;
      name: string;
      image: string;
      role: string;
      note: string;
   };
}) {
   return (
      <div
         onClick={() => window.open(user.portfolio, "_blank")}
         className="w-fit h-fit flex flex-col justify-center items-start gap-4 p-4 rounded-lg shadow-md cursor-pointer bg-white dark:bg-[#1A1A1A]">
         {/* User Info Section */}
         <div className="flex justify-start items-center gap-4">
            <Image
               width={50}
               height={50}
               className="rounded-lg"
               src={user.image}
               alt={user.name}
            />
            <div className="flex flex-col justify-start items-start">
               <h1 className="text-lg font-semibold text-neutral-800 dark:text-white">
                  {user.name}
               </h1>
               <h2 className="text-sm font-medium text-neutral-600 dark:text-gray-400">
                  {user.role}
               </h2>
            </div>
         </div>

         {/* User Note */}
         <p className="text-sm text-neutral-700 dark:text-gray-300">{user.note}</p>
      </div>
   );
}
