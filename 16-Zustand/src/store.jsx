import { create } from 'zustand'

export const useCounter = create((set) => (
    {
        count : 0,
        updateCount : () => set((state) => ({count : state.count + 1})),
        decreamentCount : () => set((state) => ({
            count : state.count - 1
        }))
    }
))