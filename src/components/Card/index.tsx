import { CardContainer } from "./styles";

type Props = {
    post: {
      id: number
      title: string
      body: string
      created_at: string
    }
  }

export function Card({ post }: Props){
    return(
        <CardContainer>
            <div>
                <h2>{post.title}</h2>
                <span>Há 1 dia</span>
            </div>
            <p>
            {post.body}
            </p>
        </CardContainer>
    )
}