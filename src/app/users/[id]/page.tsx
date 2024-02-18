import React from 'react'

const DetailUserPage = (props: any) => {
    const { params } = props;
    console.log('>>>check params', params);
    
    return (
        <div>
            abc 
            id = {params?.id}
        </div>
    )
}

export default DetailUserPage;
