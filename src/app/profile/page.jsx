// import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
// import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
// import { redirect } from "next/navigation";

// const Profile = async () => {
    
//     const {getUser, isAuthenticated } = getKindeServerSession();
    
//     if (!isAuthenticated()) {
//         redirect("/api/auth/login"); 
//     }
    
//     const user = await getUser();


    
//     return (
//         <section className="container mx-auto min-h-screen">
//             <p className="text-3xl font-semibold">hey {user?.family_name} {user?.given_name} 👋</p>
//         </section>
//     );
// };

// export default Profile;

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Profile() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const user = await getUser();

  return (await isAuthenticated()) ? (
    <section className="container mx-auto min-h-screen">
        <p className="text-3xl font-semibold">hey {user?.family_name} {user?.given_name} 👋</p>
    </section>
  ) : (
    <div className="container mx-auto min-h-screen text-2xl">
      This page is protected, please <LoginLink className="font-bold underline">Login</LoginLink> to view it
    </div>
  );
}