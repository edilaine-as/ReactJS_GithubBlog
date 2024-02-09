import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IssuesContext } from "../../contexts/IssuesContext";
import { InfoPost, IssuesContainer, PostContainer, PostHeader } from "./styles";
import { useParams } from 'react-router-dom';
import { differenceBetweenDates } from "../../utils/differenceBetweenDates";
import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDay, faChevronLeft, faArrowUpRightFromSquare, faComment } from '@fortawesome/free-solid-svg-icons'

export function Issues(){
    
    const { issues } = useContext(IssuesContext)
    
    const [now, setNow] = useState(new Date());

    const { id } = useParams(); 
    const selectedIssueId = id ? parseInt(id) : null;
    const selectedIssue = issues.find((issue) => issue.id === selectedIssueId);

    useEffect(() => {
        //a data atual é atualizada a cada 30s
        const interval = setInterval(() => {
            setNow(new Date());
        }, 30000);
      
        return () => clearInterval(interval);
    }, [])

    return (
        <IssuesContainer>
            <PostContainer>
                <PostHeader>
                    <Link to="/">
                        <FontAwesomeIcon icon={faChevronLeft} />
                        Voltar
                    </Link>
                    <Link to={selectedIssue?.html_url ?? '/'} target="_blank">
                        Ver no GitHub
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </Link>
                </PostHeader>
                <h2>{selectedIssue?.title}</h2>
                <InfoPost>
                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        {selectedIssue?.user?.login}
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCalendarDay} />
                        {differenceBetweenDates(now, new Date(selectedIssue == null? new Date() : selectedIssue?.created_at))}
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faComment} />
                        {selectedIssue?.comments} comentários
                    </div>
                </InfoPost>
            </PostContainer>

            <ReactMarkdown>
                {selectedIssue?.body}
            </ReactMarkdown>
        </IssuesContainer>
    )
}