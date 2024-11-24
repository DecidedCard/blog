import React from "react";

import useQuery from "@/hooks/useQuery";

import styles from "@/styles/page.module.scss";

const PostList = () => {
  const { postData } = useQuery();

  return (
    postData.post && (
      <section className={styles.posts}>
        <h2>포스트</h2>
        {postData.post.map((item) => (
          <div className={styles.post_card} key={item.id}>
            <div className={styles.content}>
              <p>{item.title}</p>
              <p>{item.comment}</p>
            </div>
          </div>
        ))}
      </section>
    )
  );
};

export default PostList;
