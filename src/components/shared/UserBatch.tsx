import Image from "next/image";

export default function UserBatch({
   user,
}: {
   user: {
      name: string;
      image: string;
      role: string;
      note: string;
   };
}) {
   return (
      <div className="w-fit h-fit flex flex-col justify-center items-start gap-4 p-4 rounded-lg shadow-md cursor-pointer">
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
               <h1 className="text-lg font-semibold text-neutral-800">{user.name}</h1>
               <h2 className="text-sm font-medium text-neutral-600">{user.role}</h2>
            </div>
         </div>

         {/* User Note */}
         <p className="text-sm text-neutral-700">{user.note}</p>
      </div>
   );
}
