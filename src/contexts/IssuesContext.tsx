import { differenceInDays, differenceInYears, differenceInHours, differenceInMinutes } from 'date-fns';
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Issue {
    id: number;
    title: string;
    body: string;
    html_url: string;
    created_at: Date;
    comments: number;
    user: {
        login: string;
    };
}

interface IssueContextType {
    issues: Issue[]
    totalPosts: number
    differenceBetweenDates: (now:Date, createdAt:Date) => string;
}

interface IssuesProviderProps {
    children: ReactNode
}

export const IssuesContext = createContext<IssueContextType>(
    {} as IssueContextType,
)

export function IssuesProvider({ children }: IssuesProviderProps) {
    const [issues, setIssues] = useState<Issue[]>([]);
    const [totalPosts, setTotalPosts] = useState(0);
    
    async function fetchIssuesRepository(){
        await api.get('search/issues', {
            params: {
                q: 'repo:daltonmenezes/test'
            }
        })
        .then(response => {
            setTotalPosts(response.data.total_count);

            const newCards = response.data.items.map((itemResponse: Issue) => ({
                id: itemResponse.id,
                title: itemResponse.title,
                body: itemResponse.body,
                html_url: itemResponse.html_url,
                created_at: new Date(itemResponse.created_at),
                user: {
                    login: itemResponse.user.login
                },
                comments: itemResponse.comments,
            }));

            setIssues(newCards);
        })
    }

    function differenceBetweenDates(now:Date, createdAt:Date){
        const daysDiff = differenceInDays(now, createdAt);
        const yearsDiff = differenceInYears(now, createdAt);
        const hoursDiff = differenceInHours(now, createdAt);
        const minutesDiff = differenceInMinutes(now, createdAt);

        let message;

        if (yearsDiff > 0) {
        message = `Há mais de ${yearsDiff} ano(s) atrás`;
        } else if (daysDiff > 0) {
        message = `Há ${daysDiff} dia(s) atrás`;
        } else if (hoursDiff > 0) {
        message = `Há ${hoursDiff} hora(s) atrás`;
        } else {
            message = `Há ${minutesDiff} minuto(s) atrás`;
        }

        return message;
    }

    useEffect(() => {
        fetchIssuesRepository()
    }, [])

    return (
        <IssuesContext.Provider
          value={{
            issues,
            totalPosts,
            differenceBetweenDates
          }}
        >
          {children}
        </IssuesContext.Provider>
    )
}