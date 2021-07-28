import React, { useState } from 'react';
import Loading from './Loading';
function HookLoading(props) {
    const [isVisibale , setIsVisibale] = useState(false);
    
    return (
        [isVisibale? <Loading/> : null, ()=> setIsVisibale(false) , ()=>setIsVisibale(true)]
    );
}

export default HookLoading;