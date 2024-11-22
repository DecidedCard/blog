"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import styles from "@/styles/page.module.scss";

export interface Post {
  title: string;
  comment: string;
}

export default function Home() {
  const { register, watch, handleSubmit } = useForm<Post>();

  console.log(watch());

  const onSubmitHandler: SubmitHandler<Post> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.test}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <input type="text" placeholder="제목" {...register("title")} />
        <input type="text" placeholder="내용" {...register("comment")} />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}
