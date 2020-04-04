import React,{useState} from 'react';

const ItemAddCheckOut = (props) => {

    const [filterLists,setFilterList] = useState(props.lists);
    
    const handleFilterList = (id) => {
        setFilterList(props.lists.filter( m => m.id !== id));
    }

    const style = {
        fontSize: '14px',
        fontWeight: 'bold'
    }

    const styleBtn = {
        fontSize: '10px',
        borderRadius: '10px',
        position: 'relative',
        top: '-3px',
        border: '1px solid gray'
    }

    const styleBtnPrice = {
        color: 'red',
        background: 'none',
        border: '1px solid red',
        marginRight: '5px',
        fontSize: '12px',
        marginTop: '-15px',
        borderRadius: '4px',
    }

    let content;
    { if(filterLists.length === 0){
        content = <p className="text-center mt-5"
                    >Sorry Please add content</p>
        props.callMe(true);
    } 
    if(filterLists.length >= 1){
        content = <div>
            { props.lists.map( m => (
                <div className="card mt-1 pl-2 pr-2 pt-3" style={{ backgroundColor: 'whitesmoke', border: 'none' ,borderBottom: '1px solid black' }}>
                <div>
                    <p className="float-left" style={style}>{m.title}</p>
                    <p className="float-right" style={style}>
                        PKR {m.price} <button style={styleBtn} onClick={() => handleFilterList(m.id)}>
                                    x
                                </button>
                    </p>
                </div>
                <p className="text-muted" style={{ fontSize: '12px', marginTop: '-12px' }}>
                    1 x PKR {m.price}
                </p>
                <div className="mb-3 pt-0" style={{ marginTop: '-6px' }}>
                    <button style={styleBtnPrice}>
                        -</button>
                    <button style={styleBtnPrice}>
                        +</button>
                </div>
            </div>
            ))}
            <div className="mt-2 pl-2 pr-2"
             style={{ fontSize: '18px', fontWeight: 'bold', fontFamily: 'serif' }}
            >
                <p className="float-left">YOUR TOTAL</p>
                <p className="float-right" style={{color:'red'}}>
                    PKR {props.lists.map( m=> {return m.price})}</p>
            </div>
        
        </div>
    }
}

    return content;
};

export default ItemAddCheckOut;