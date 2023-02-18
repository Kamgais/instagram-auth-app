

export const useLocalStorage = () => {


    const setItem = (key: string, data: Object) => {
        localStorage.setItem(key, JSON.stringify(data))
    }

    const getItem = (key: string) => {
        return JSON.parse(localStorage.getItem(key)!)
        
    }

    const clearItem = (key: string) => {
        localStorage.removeItem(key);
    }

    return {
        setItem,
        getItem,
        clearItem
    }
}