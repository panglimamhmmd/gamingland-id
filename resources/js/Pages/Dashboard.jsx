import React, { useState, useEffect } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Link, Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard(props) {
    const [title, setTitle] = useState('');
    const [alt, setAlt] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title,
            alt,
            description,
            category,
        };
        Inertia.post('/news', data);
        setIsNotif(true);
        setTitle('');
        setAlt('');
        setDescription('');
        setCategory('');
    };

    useEffect(() => {
        if (!props.myNews) {
            Inertia.get('/news');
        }
        return;
    }, []);

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Control Panel
                </h2>
            }
        >
            <Head title="Dashboard" />
            {isNotif && (
                <div className="alert alert-info shadow-lg">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="stroke-current flex-shrink-0 w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        <span>{props.flash.message}</span>
                    </div>
                </div>
            )}
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-5 border ">
                <div className="w-full h-screen lace-items-center">
                    <h1 className="font-bold text-2xl ">Create Article!</h1>
                    <input
                        type="text"
                        placeholder="Title"
                        className="m-2 input input-bordered w-full max-w-xs "
                        onChange={(title) => setTitle(title.target.value)}
                        value={title}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Alt"
                        className="m-2 input input-bordered w-full max-w-xs "
                        onChange={(alt) => setAlt(alt.target.value)}
                        value={alt}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Deskripsi"
                        className="m-2 input input-bordered w-full max-w-xs"
                        onChange={(description) =>
                            setDescription(description.target.value)
                        }
                        value={description}
                        required
                    />
                    <select
                        className="m-2 select select-bordered w-full max-w-xs "
                        onChange={(event) => setCategory(event.target.value)}
                        value={category}
                    >
                        <option disabled value="">
                            Category
                        </option>
                        <option value="Esport">Esport</option>
                        <option value="Game PC">Game PC</option>
                        <option value="Game Mobile">Game Mobile</option>
                        <option value="Game Console">Game Console</option>
                    </select>
                    <button
                        className="m-2 btn btn-accent submit w-full max-w-xs"
                        onClick={() => handleSubmit()}
                        type="submit"
                    >
                        Submit
                    </button>
                </div>

                <div className=" content-center ">
                    {props.myNews && props.myNews.length > 0 ? (
                        props.myNews.map((news, i) => {
                            return (
                                <>
                                    <h1 className="font-bold text-2xl ">
                                        Your Latest Article!
                                    </h1>
                                    <div
                                        key={i}
                                        className="card w-full lg:w-96 bg-base-100 shadow-xl my-4"
                                    >
                                        <div className="card-body">
                                            <h2 className="card-title">
                                                {news.title}
                                                <div className="badge badge-accent">
                                                    New!
                                                </div>
                                            </h2>
                                            <p>{news.alt}</p>
                                            <p>{news.description}</p>
                                            <div className="card-actions justify-end">
                                                <div className="badge badge-inline">
                                                    {news.category}
                                                </div>
                                                <div className="badge badge-outline">
                                                    <Link
                                                        href={route(
                                                            'edit.news'
                                                        )}
                                                        method="get"
                                                        data={{ id: news.id }}
                                                        as="button"
                                                    >
                                                        edit
                                                    </Link>
                                                </div>
                                                <div className="badge badge-outline">
                                                    <Link
                                                        href={route(
                                                            'delete.news'
                                                        )}
                                                        method="post"
                                                        data={{ id: news.id }}
                                                        as="button"
                                                    >
                                                        delete
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })
                    ) : (
                        <div className="flex items-center justify-center py-10">
                            <p className="text-2xl">No Article Yet</p>
                        </div>
                    )}
                </div>
            </div>
        </Authenticated>
    );
}
