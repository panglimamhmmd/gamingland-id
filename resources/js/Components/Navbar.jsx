import { Link } from '@inertiajs/inertia-react';
import Avatar from 'avataaars';

const ssNavbar = ({ user }) => {
    return (
        <div className="navbar bg-base-100 text-white px-20">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-red-500 text-xl">
                    GAMINGLAND
                </Link>
                <Link
                    href="/news/E-sport"
                    className="btn btn-ghost normal-case text-xl"
                >
                    E-sport
                </Link>
                <Link
                    href="/news/Game PC"
                    className="btn btn-ghost normal-case text-xl"
                >
                    Game PC
                </Link>
                <Link
                    href="/news/Game Console"
                    className="btn btn-ghost normal-case text-xl"
                >
                    Game Console
                </Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered"
                    />
                </div>
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex="0"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <Avatar
                                style={{ width: '100%', height: '100%' }}
                                avatarStyle="Transparent"
                                topType="ShortHairDreads01"
                                accessoriesType="Sunglasses"
                                hairColor="Red"
                                facialHairType="MoustacheFancy"
                                facialHairColor="Red"
                                clotheType="Hoodie"
                                clotheColor="Red"
                                eyeType="Squint"
                                eyebrowType="RaisedExcited"
                                mouthType="Smile"
                                skinColor="Light"
                            />
                        </div>
                    </label>
                    <ul
                        tabIndex="0"
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                        {!user ? (
                            <>
                                <li>
                                    <Link href={route('login')} as="button">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route('register')} as="button">
                                        Register
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        href={route('dashboard')}
                                        as="button"
                                        className="justify-between"
                                    >
                                        Dashboard
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link>Settings</Link>
                                </li>
                                <li>
                                    <Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const Navbar = ({ user }) => {
    return (
        <header class="text-gray-600 body-font bg-base-100">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    <Link
                        href="/news/E-sport"
                        className="btn btn-ghost normal-case text-xl text-slate-50"
                    >
                        E-sport
                    </Link>
                    <Link
                        href="/news/Game PC"
                        className="btn btn-ghost normal-case text-xl text-slate-50"
                    >
                        Game PC
                    </Link>
                    <Link
                        href="/news/Game Console"
                        className="btn btn-ghost normal-case text-xl text-slate-50"
                    >
                        Game Console
                    </Link>
                </nav>
                <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <Link href="/" class="ml-3 font-bold text-2xl text-red-500">
                        Gamingland.id
                    </Link>
                </a>
                <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                    <div className="flex-none gap-2">
                        <div className="dropdown dropdown-end">
                            <label
                                tabIndex="0"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <Avatar
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                        }}
                                        avatarStyle="Transparent"
                                        topType="ShortHairDreads01"
                                        accessoriesType="Sunglasses"
                                        hairColor="Red"
                                        facialHairType="MoustacheFancy"
                                        facialHairColor="Red"
                                        clotheType="Hoodie"
                                        clotheColor="Red"
                                        eyeType="Squint"
                                        eyebrowType="RaisedExcited"
                                        mouthType="Smile"
                                        skinColor="Light"
                                    />
                                </div>
                            </label>
                            <ul
                                tabIndex="0"
                                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-slate-50 rounded-box w-52"
                            >
                                {!user ? (
                                    <>
                                        <li>
                                            <Link
                                                href={route('login')}
                                                as="button"
                                            >
                                                Login
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={route('register')}
                                                as="button"
                                            >
                                                Register
                                            </Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <Link
                                                href={route('dashboard')}
                                                as="button"
                                                className="justify-between"
                                            >
                                                Dashboard
                                                <span className="badge">
                                                    New
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>Settings</Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={route('logout')}
                                                method="post"
                                                as="button"
                                            >
                                                Logout
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
