import Link from "next/link";

const Navbar = () => {
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
                <Link className="px-3 py-2 rounded-md bg-zinc-900" href={'/auth/login'}>Login</Link>
                <Link className="px-3 py-2 rounded-md bg-zinc-900" href={'/auth/register'}>Sign Up</Link>
            </div>
            </div>
        </section>
    );
};

export default Navbar;