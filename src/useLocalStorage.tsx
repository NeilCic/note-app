import { useEffect, useState } from "react"

export const useLocalStorage = <T,>(key: string, initialValue: T) => {
    const [value, setValue] = useState<T>(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue == null) {
            return initialValue
        } else {
            return JSON.parse(jsonValue)
        }
    })
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])
    
    return [value, setValue] as [T, typeof setValue]
}