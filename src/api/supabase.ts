import clientSupabase from "@/util/clientSupabase";

import type { Post } from "@/app/page";

export const insertPost = async (post: Post) => {
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
