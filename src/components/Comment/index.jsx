import { Trash, ThumbsUp } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../Avatar'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/5294488?v=4"
        alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luciano Mendes</strong>
              <time title="18 de Outubro 10:15" dateTime="2022-18-10 19:45:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar commnetário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={24} weight={likeCount > 0 ? 'fill' : 'light'} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
