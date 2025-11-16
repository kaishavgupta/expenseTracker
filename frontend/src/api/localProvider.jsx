export const storeDataLocal=(token)=>{
        return localStorage.setItem("token",JSON.stringify(token))
    }        

export const LocalToken =()=>{
    let token = localStorage.getItem("token")
    return JSON.parse(token)
}

export const logout=()=>{
    return localStorage.removeItem("token")
}