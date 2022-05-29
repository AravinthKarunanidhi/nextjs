import {useRouter} from 'next/router';
function ClientsProjectPage(){
    const router = useRouter();
    console.log(router.query);
    return (<div>
        <h1>The Client Projects of the given client!!!</h1>
    </div>)
}

export default ClientsProjectPage;