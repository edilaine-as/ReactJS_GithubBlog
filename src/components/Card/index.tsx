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
    return(
        <CardContainer>
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