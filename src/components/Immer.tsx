import React , {useState, useCallback, useRef } from 'react';
import produce from 'immer';



type infoType = {
    id : number,
    name : string,
    username : string
}
type dataType = {
    array : infoType[],
    uselessValue : any
}
function Immer() {
    const nextId = useRef(1);
    const [ form, setForm ] = useState({name : '', username : ''});
    const [ data, setData ] = useState<dataType>({
        array : [],
        uselessValue : null
    });
    const onChange = useCallback(
        e => {
            const { value, name } = e.target;
            setForm(
                produce(draft =>{
                    draft[name] = value
                })
            );
        },
        [form]
    );
    
    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            
            const info = {
                id : nextId.current,
                name : form.name,
                username : form.username
            }
            setData(produce(draft=>{
                draft.array.push(info)
            }));
            nextId.current += 1;

        },
        [data, form.username, form.name ],
    );
    const onRemove = useCallback(
        (id) => {
            setData(produce(draft=>{
                draft.array.splice(draft.array.findIndex(info => info.id === id), 1)
            }))
        },
        [data],
    )

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text"
                       name="username"
                       placeholder="아이디"
                       onChange={onChange}
                       value={form.username}
                />
                <input type="text"
                       name="name"
                       placeholder="이름"
                       onChange={onChange}
                       value={form.name}
                />
                <button type="submit">등록</button>

            </form>
            <div>
                <ul>
                    {
                        data.array.map(info => (
                            <li key={info.id} onClick={() => onRemove(info.id)}>
                                {info.username} ({info.name}) {info.id}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Immer;
