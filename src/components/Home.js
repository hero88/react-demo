import {useState, useEffect} from 'react';

const useFetch = url => {
    const [stat, setStat] = useState([null, false]);
    useEffect(()=> {
        setStat([null, true]);
        (async () => {
            const data = await fetch(url).then(res => res.json());
            setStat([data, false]);
        })();
    }, [url]);
    return stat;
};

export default function Home() {
    const URL = "http://localhost:3001/posts";
    const [data, loading] = useFetch(URL);
    const [posts, setPosts] = useState(data);    

    useEffect(()=> {
        if (data) setPosts(data);    
    },[data]);

    if (!data || loading) 
        return <div>Loading...</div>;
    
    return(
        <div className="container text-center">
            <h1> Welcome Home! </h1>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts?.map((element,index)=>
                            <tr key={index}>
                                <td>{element.id}</td>
                                <td>{element.title}</td>
                                <td>{element.author}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            {/* <button type='button' onClick={()=>setSteps(steps+1)}>Click</button> */}
            
        </div>
    )
}
