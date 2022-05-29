import Link from 'next/link';
function ClientPage(){
    const clients = [
        {id:'max',name:'Max'},
        {id:'milli', name:'Millinium'}
    ]
    return(
        <div>
            <h1>The Client page !!</h1>
            <ul>
                {
                    clients.map(client=><li key={client.id}>
                        <Link href={{
                            pathname:'/clients/[id]',
                            query :{id:client.id}
                        }}>{client.name}</Link>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default ClientPage;