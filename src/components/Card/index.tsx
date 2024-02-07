import { useNavigate } from "react-router";
import { CardContainer } from "./styles";

type Props = {
    issue: {
      id: number
      title: string
      body: string
      created_at: string
    }
  }

export function Card({ issue }: Props){
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/post/${issue.id}`)
    }

    return(
        <CardContainer onClick={handleClick}>
            <div>
                <h2>{issue.title}</h2>
                <span>Há 1 dia</span>
            </div>
            <p>
            {issue.body}
            </p>
        </CardContainer>
    )
}