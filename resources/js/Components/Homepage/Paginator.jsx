import { Link } from '@inertiajs/inertia-react';

const Paginator = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div className="btn-group">
            {prev && (
                <Link href={prev} className="btn btn-base-100">
                    «
                </Link>
            )}
            <Link className="btn btn-base-100">{current}</Link>
            {next && (
                <Link href={next} className="btn btn-base-100">
                    »
                </Link>
            )}
        </div>
    );
};

export default Paginator;
