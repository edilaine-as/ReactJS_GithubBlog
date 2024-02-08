import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { differenceBetweenDates } from "../../utils/differenceBetweenDates";
import { CardContainer } from "./styles";

type Props = {
    issue: {
        id: number;
        title: string;
        body: string;
        html_url: string;
        created_at: Date;
        comments: number;
        user: {
            login: string;
        }
    }
  }

export function Card({ issue }: Props){
    const [now, setNow] = useState(new Date());
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/post/${issue.id}`)
    }

    useEffect(() => {
        //a data atual é atualizada a cada 30s
        const interval = setInterval(() => {
            setNow(new Date());
        }, 30000);
      
        return () => clearInterval(interval);
    }, [])

    return(
        <CardContainer onClick={handleClick}>
            <div>
                <h2>{issue.title}</h2>
                <span>{differenceBetweenDates(now, new Date(issue.created_at))}</span>
            </div>
            <p>
                {issue.body}
            </p>
        </CardContainer>
    )
}