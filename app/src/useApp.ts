import { Dispatch, SetStateAction, useState } from "react"
import axios from "axios";

const useApp = (question: string, setQuestion: any, setList: Dispatch<SetStateAction<string[]>>, list: string[]) => {
    const postQuestion = async () => {
        setList([...list, question])
        setQuestion("");
        await axios.post("https://europe-west3-hack-team-naturalstupidity.cloudfunctions.net/python-backend/",
        {
            prompt: question
        },
        {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3NmRhOWQzMTJjMzlhNDI5OTMyZjU0M2U2YzFiNmU2NTEyZTQ5ODMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzMjU1NTk0MDU1OS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjMyNTU1OTQwNTU5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE0MTQ2NTgzMzA2OTgxNTc2Mzg5IiwiaGQiOiJkYnRlY2hoYWNrYXRob24uY29tIiwiZW1haWwiOiJpc2FhY3E3ODUuZ21haWwuY29tQGRidGVjaGhhY2thdGhvbi5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IkVHMDJrOVlpOEJkRThJbHhXU3I2RFEiLCJpYXQiOjE2ODkyODI5NTksImV4cCI6MTY4OTI4NjU1OX0.aAaN_oAi5hLjwcl2MFqhdh5ntuUgHX0PccwNEFPoozH4cBNG4UPm8IeniSUWnDPXwLTru5ZvYebKH_ZWeiuRtYYgvwxNR6nieizR5M1ZYdaL-HwqNI1mpS8RBR2_UU-dMHVOFyEfgmdTBfQuIuoMBoCVFZ79CrIhsUS60MLkZ2OMXeR5vqzu3fCVMJRRYm35TaVNM3QirHn4ZAvutC1dum1HgIRKifnWlEzWUTqvV9nWUqII80lIGkyLEuAxUrr1t6VBVPUI5eOH-sszEqb_ZposX5DQ-y5J7JtQQG82gnisU54X5d3lmRi2VTArwF3b1K_KZkZj9oVnvjFMviC-fA"
            }
        }).then((response: any) => {
            setList([...list, question, response.data]);
        }).catch((err: any) => {
            console.log(err);
            setList([...list, question, "Error occurred, please try a different prompt"])
        })
    }

    return { postQuestion }
}

export default useApp