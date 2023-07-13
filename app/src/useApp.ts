import { useState } from "react"



const useApp = (question: string) => {
    const [answer, setAnswer] = useState("");

    const postQuestion = async () => {
        const response = "test response"
        setAnswer(response)
    }

    return { postQuestion, answer }
}

export default useApp