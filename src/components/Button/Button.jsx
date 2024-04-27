import styles from './Button.module.css';

export const Button = ({ onLoadMore, hasMore }) => {
  return (
    <button className={styles.Button} onClick={onLoadMore} disabled={!hasMore}>
      Load more
    </button>
  );
};