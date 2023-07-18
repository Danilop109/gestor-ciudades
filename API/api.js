const url= "http://localhost:4050";

export const getDepartamento= async()=>{
    try {
        const result= await fetch(`${url}/departamentos`);
        const response=await result.json();
        return response
    } catch (error) {
        console.log(error);
    }
}

export const postDepartamento = async(data)=> {
    console.log(data);
    try {
        await fetch(`${url}/departamentos`, {
            method:'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-type': 'application/json'
            }
        });
        window.location.href= 'index.html'
    } catch (error) {
        console.log(error);
    }
}


export const deleteDepartamento = async(id)=> {
    console.log(id);
    try {
        await fetch(`${url}/departamentos/${id}` ,{
            method:'DELETE',
            
        });
    } catch (error) {
        console.log(error);
    }
}

export const putDepartamento = async(data,id)=> {
    console.log(id);
    try {
        await fetch(`${url}/departamentos/${id}` ,{
            method:'PUT',
            body: JSON.stringify(data),
            headers:{
                'Content-type': 'application/json'
            }
        });
    } catch (error) {
        console.log(error);
    }
}


//                                                  CIUDADES

export const getCiudad= async()=>{
    try {
        const result= await fetch(`${url}/ciudades`);
        const response=await result.json();
        return response
    } catch (error) {
        console.log(error);
    }
}

export const postCiudad = async(data)=> {
    console.log(data);
    try {
        await fetch(`${url}/ciudades`, {
            method:'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-type': 'application/json'
            }
        });
        // window.location.href= 'index.html'
    } catch (error) {
        console.log(error);
    }
}

export const deleteCiudadesAll = async(id)=> {
    console.log(id);
    try {
        await fetch(`${url}/departamentos/${id}/ciudades` ,{
            method:'DELETE',
            
        });
    } catch (error) {
        console.log(error);
    }
}

export const deleteCiudades = async(id)=> {
    console.log(id);
    try {
        await fetch(`${url}/ciudades/${id}` ,{
            method:'DELETE',
            
        });
    } catch (error) {
        console.log(error);
    }
}

export const putCiudades = async(data,id)=> {
    console.log(id);
    try {
        await fetch(`${url}/ciudades/${id}` ,{
            method:'PUT',
            body: JSON.stringify(data),
            headers:{
                'Content-type': 'application/json'
            }
        });
    } catch (error) {
        console.log(error);
    }
}