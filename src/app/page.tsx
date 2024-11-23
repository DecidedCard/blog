"use client";

import { useCallback, useEffect, useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import { deletePost, insertPost, readPost } from "@/api/supabase";

import styles from "@/styles/page.module.scss";

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
  const { register, setValue, handleSubmit } = useForm<InputForm>();

  const [posts, setPosts] = useState<Post[] | null>(null);

  const fetch = useCallback(async () => {
    const data = await readPost();

    if (data) {
      setPosts(data);
    }
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const onSubmitHandler: SubmitHandler<InputForm> = async (data) => {
    await insertPost(data);

    setValue("comment", "");
    setValue("title", "");

    await fetch();
  };

  const onClickDeleteHandler = async (id: number) => {
    await deletePost(id);

    await fetch();
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
              <div className={styles.content}>
                <p>{item.title}</p>
                <p>{item.comment}</p>
              </div>
              <div>
                <button onClick={() => onClickDeleteHandler(item.id)}>
                  삭제
                </button>
                <button onClick={() => onClickDeleteHandler(item.id)}>
                  수정
                </button>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
