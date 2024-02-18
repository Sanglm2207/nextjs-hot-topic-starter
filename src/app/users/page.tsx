import UserTable from '@/components/users/user.table';

const calculatePagesCount = (pageSize: number, totalCount: number) => {
    return totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize);
};

const UserPage = async (props: any) => {
    const limit = 1;
    const page = props?.searchParams?.page ?? 1;

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/users?_page=${page}&_limit=${limit}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const total_items = +(res.headers.get('X-Total-Count') ?? 0);
    const total_pages = calculatePagesCount(limit, total_items);

    const data = await res.json();
    console.log('>>>check data', data);
    
    return (
        <div>
            <UserTable 
                dataSource={data ? data : []}
                meta={
                    {
                        current: +page,
                        pageSize: limit,
                        total: total_items,
                    }
                }
            />
        </div>
    )
}

export default UserPage;
