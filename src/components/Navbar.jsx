import Link from "next/link";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";


const Navbar = async () => {
    
    const {isAuthenticated} = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();

    return (
        <section className="flex container mx-auto my-10 border-b-2 pb-6 border-zinc-900">
            {/* text */}
            <div className="w-3/4">
            <h1 className="text-2xl font-bold">Silent Pen</h1>
            <h2 className="text-lg">A Personal Archive ✒️</h2>
            <br />
            <div className="space-x-3">
                <Link className="px-3 py-2 rounded-md bg-zinc-900" href={'/'}>Blog</Link>
                <Link className="px-3 py-2 rounded-md bg-zinc-900" href={'/profile'}>Profile</Link>
                {isUserAuthenticated ? (
                        <LogoutLink className="px-3 py-2 rounded-md bg-zinc-900">
                            Logout
                        </LogoutLink>
                    ) : (
                        <>
                            <LoginLink className="px-3 py-2 rounded-md bg-zinc-900">
                                Sign in
                            </LoginLink>
                            <RegisterLink className="px-3 py-2 rounded-md bg-zinc-900">
                                Sign up
                            </RegisterLink>
                        </>
                    )}
            </div>
            </div>
        </section>
    );
};

export default Navbar;