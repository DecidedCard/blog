import { useSuspenseQuery } from "@tanstack/react-query";

import { readPost } from "@/api/supabase";

import QUERY_KEY from "@/util/QUERY_KEY";

const useQuery = () => {
  const {
    isFetching: postFetching,
    isError: postError,
    data: post,
  } = useSuspenseQuery({
    queryKey: [QUERY_KEY.post],
    queryFn: readPost,
  });

  const postData = { postFetching, postError, post };

  return { postData };
};

export default useQuery;
