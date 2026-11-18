import { useEffect, useState } from 'react';
import { api } from './api';
import { IconHeart } from './icons';

export default function ReactionBar({ postId = null, replyId = null, initial }) {
  const [reactions, setReactions] = useState(
    initial || { heart: { count: 0, reacted: false } },
  );

  useEffect(() => {
    setReactions(initial || { heart: { count: 0, reacted: false } });
  }, [initial?.heart?.count, initial?.heart?.reacted, postId, replyId]);

  async function toggle() {
    try {
      const data = await api.toggleReaction({
        kind: 'heart',
        postId,
        replyId,
      });
      setReactions(data.reactions);
    } catch {
      // ignore
    }
  }

  return (
    <div className="reaction-bar">
      <button
        type="button"
        className={`react-btn heart${reactions.heart?.reacted ? ' on' : ''}`}
        onClick={toggle}
        aria-label="Heart"
      >
        <IconHeart />
        <span>{reactions.heart?.count || 0}</span>
      </button>
    </div>
  );
}
