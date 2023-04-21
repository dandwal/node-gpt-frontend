import { useMutation } from "@tanstack/react-query";
import nodeOpenAIClient from "../api/nodeOpenAIClient";

const { getReply } = nodeOpenAIClient();

interface usePostMessageBody {
  text: string;
}
const usePostMessage = () => {
  const { data, error, isError, isLoading, isSuccess, mutate } = useMutation(
    ["postMessage"],
    (message: usePostMessageBody) => getReply(message),
    { onError: (error: any) => console.log(error) }
  );
  return { data, error, isError, isLoading, isSuccess, mutate };
};
export default usePostMessage;
