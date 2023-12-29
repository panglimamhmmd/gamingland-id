import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import NewsLists from '@/Components/Homepage/NewsLists';
import Paginator from '@/Components/Homepage/Paginator';

export default function Homepage(props) {
    return (
        <div className="min-h-screen bg-slate-50 ">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="flex justify-center my-2 item-center">
                <p className="text-4xl  text-base-100">
                    Latest
                    <span className="text-red-500"> Article</span>
                </p>
            </div>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                <NewsLists news={props.news.data} />
            </div>
            <div className="flex justify-center items-center">
                <Paginator meta={props.news.meta} />
            </div>
        </div>
    );
}
