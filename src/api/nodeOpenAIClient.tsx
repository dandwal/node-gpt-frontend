import axiosClient from "../clients/axiosClient";

interface nodeOpenAIClientOptions {
  text: string;
}

const nodeOpenAIClient = () => {
  const client = axiosClient();
  return {
    async getReply({ text }: nodeOpenAIClientOptions) {
      const response = await client.post("/api/messages", { text });
      console.log("response: ", response);
      console.log("response.data: ", response.data);
      return response.data;
    },
  };
};
export default nodeOpenAIClient;
