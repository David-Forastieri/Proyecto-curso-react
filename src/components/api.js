import React from 'react'

const api = () => {
    
    useEffect(() => {
        fetch('https://api.mercadolibre.com/products/search?status=active&site_id=MLA&q=Samsung&limit=5000')
        .then(result => {
            return result.json()
        }).then(value => {
            //Guardamos en un state
            console.log(value);
        }).catch(error => {
            console.log(error);
        })
        return () => {}
    },[])


    
    return (
        <div>
            
        </div>
    )
}

export default api
