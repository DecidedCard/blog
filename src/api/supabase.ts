import clientSupabase from "@/util/clientSupabase";

import type { InputForm } from "@/app/page";

export const readPost = async () => {
  const { data: post, error } = await clientSupabase.from("post").select("*");

  if (error) {
    console.error(error);
    throw new Error("데이터를 가져오는 중에 에러가 발생하였습니다.");
  }

  return post;
};

export const insertPost = async (post: InputForm) => {
  const { data, error } = await clientSupabase
    .from("post")
    .insert([post])
    .select();

  if (error) {
    console.error(error);
    throw new Error("post를 저장하는 중에 오류가 발생하였습니다.");
  }

  return data;
};
