import { useState } from 'react'


export interface UseFormReturn<T> {
    formState: T;
    onInputChange: <K extends keyof T>(target: { name: K; value: T[K] }) => void;
    onInputChangeSingle: (value: T)=> void;
    onResetForm: ()=> void;
  }

export const useForm = <T>(initialState: T ):UseFormReturn<T> => {
  
    const [formState, setFormState] = useState<T>(initialState)

    const onInputChange = <K extends keyof T>(target: {name: keyof T, value:T[K]}) => 
    { const {name, value} = target;
    setFormState(
        {
            ...initialState,
            [name]: value
        }
    )
    }

    const onInputChangeSingle = (value: T) => 
        setFormState(value)

    const onResetForm = () => setFormState(initialState)
        
    return {
        ...formState,
        formState,
        onInputChange,
        onInputChangeSingle,
        onResetForm
    }
}
