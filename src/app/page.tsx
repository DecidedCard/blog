"use client";
import { Suspense } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import styles from "@/styles/page.module.scss";
import PostList from "@/components/post/PostList";

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

const Home = () => {
  const { register, setValue, handleSubmit } = useForm<InputForm>();

  const onSubmitHandler: SubmitHandler<InputForm> = async (data) => {
    console.log(data);

    setValue("title", "");
    setValue("comment", "");
  };

  return (
    <div className={styles.test}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <input type="text" placeholder="제목" {...register("title")} />
        <input type="text" placeholder="내용" {...register("comment")} />
        <button type="submit">등록</button>
      </form>
      <Suspense>
        <PostList />
      </Suspense>
    </div>
  );
};

export default Home;
