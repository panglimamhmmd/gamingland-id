import { Link } from '@inertiajs/inertia-react';
const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div
                key={i}
                className="card w-full lg:w-96 bg-base-100 hover:shadow-2xl hover:shadow-base-100 hover:bg-slate-50 hover:text-base-100 "
            >
                <figure>
                    <img
                        src="https://picsum.photos/400/300"
                        alt="Random Images"
                    />
                </figure>
                <div className="card-body">
                    <div className="card-title">
                        <Link href={`/news/detail/${data.id}`}>
                            {data.title}
                        </Link>
                        <div className="badge badge-slate">NEW</div>
                    </div>
                    <p>{data.alt}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">
                            <Link href={`/news/${data.category}`}>
                                {data.category}
                            </Link>
                        </div>
                        <div className="badge badge-outline">
                            <Link href={`/author/${data.author}`}>
                                {data.author}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};

const noNews = () => {
    return <div>Saat ini belum ada berita tersedia</div>;
};

const NewsLists = ({ news }) => {
    return !news ? noNews() : isNews(news);
};

export default NewsLists;
