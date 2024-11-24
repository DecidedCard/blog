import { useMutation, useQueryClient } from "@tanstack/react-query";

import { insertPost } from "@/api/supabase";

import QUERY_KEY from "@/util/QUERY_KEY";

//data 입력 mutation
const useInsertData = () => {
  const queryClient = useQueryClient();

  const { mutate: insert } = useMutation({
    mutationFn: insertPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.post] });
    },
  });

  return { insert };
};

export default useInsertData;
