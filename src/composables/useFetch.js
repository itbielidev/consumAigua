import { ref } from "vue"

export const useFetch = (api) => {
    const result = ref()

    fetch(api)
    .then((res)=>{
        return (res = res.json())
    })
    .then((data)=>{
        result.value = data
    })

    return result
}

