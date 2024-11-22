"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import styles from "@/styles/page.module.scss";
import { insertPost, readPost } from "@/api/supabase";
import { useEffect, useState } from "react";

export interface InputForm {
  title: string;
  comment: string;
}

export interface Post {
  id: number;
  created_at: string;
  title: string;
  comment: string;
}

export default function Home() {
  const { register, handleSubmit } = useForm<InputForm>();

  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const data = await readPost();

      if (data) {
        setPosts(data);
      }
    };

    fetch();
  }, []);

  console.log(posts);

  const onSubmitHandler: SubmitHandler<InputForm> = async (data) => {
    await insertPost(data);
    console.log(data);
  };

  return (
    <div className={styles.test}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <input type="text" placeholder="제목" {...register("title")} />
        <input type="text" placeholder="내용" {...register("comment")} />
        <button type="submit">등록</button>
      </form>

      {posts && posts.length !== 0 && (
        <section className={styles.posts}>
          <h2>포스트</h2>
          {posts.map((item) => (
            <div className={styles.post_card} key={item.id}>
              <p>{item.title}</p>
              <p>{item.comment}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
