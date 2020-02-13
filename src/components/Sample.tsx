import React from 'react';
import useSampleActions from '../hooks/useSampleActions';
import { useEffect } from 'react';
import  useState from '../hooks/useState'

function Sample() {
    const { getpost, getusers, users, post } = useSampleActions(1);
    useEffect(()=>{
        getusers();
        getpost();
    }, [getpost, getusers])
    const posted = useState('sample', 'post')
    console.log(posted);
    
    return (
        <div>
            
           {
               users?.map(user => {
                   return (
                       <div key={user?.id}>
                           {user.name}
                       </div>
                   )
               })
           }
           {
               <div>
                    <h1>{post?.title}</h1>
                    <p>{post?.body}</p>  
               </div>
           }
        </div>
    )
}

export default Sample;
