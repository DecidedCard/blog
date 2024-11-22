"use client";

import { useForm } from "react-hook-form";

import styles from "@/styles/page.module.scss";

export interface Post {
  title: string;
  comment: string;
}

export default function Home() {
  const { register, watch } = useForm<Post>();

  console.log(watch());

  return (
    <div className={styles.test}>
      <input type="text" placeholder="제목" {...register("title")} />
      <input type="text" placeholder="내용" {...register("comment")} />
    </div>
  );
}
