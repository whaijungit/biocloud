import { useState, useRef, useEffect } from 'react'

export const useCountDown = (duration: number = 1000, total: number = 60) => {
    const [count, setCount] = useState(total)
    const [downing, setDowning] = useState(false)
    const timeRef = useRef<number | undefined>()
    useEffect(() => {
        return () => {
            clear()
        }
    }, [])
    const clear = () => {
        if (timeRef.current) {
            setCount(total)
            setDowning(false)
            clearInterval(timeRef.current)
            timeRef.current = undefined
        }
    }
    const start = () => {
        if (downing && timeRef.current) {
            return
        }
        timeRef.current = setInterval(() => {
            setCount(prev => {
                --prev
                if (prev <= 0) {
                    clear()
                    return 0
                }
                setDowning(true)
                return prev
            })
        }, duration) as unknown as number


    }
    return {
        clear,
        start,
        count,
        downing,
    }
}