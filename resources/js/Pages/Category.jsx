import NewsLists from '@/Components/Homepage/NewsLists';
import Navbar from '@/Components/Navbar';
import { Head } from '@inertiajs/inertia-react';

export default function Category(props) {
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar />
            <div className="flex justify-center my-2 item-center">
                <p className="text-4xl text-base-100">
                    Category:{' '}
                    <span className="text-red-500">{props.category}</span>
                </p>
            </div>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                <NewsLists news={props.news} />
            </div>
        </div>
    );
}
