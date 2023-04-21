import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Group,
  Textarea,
  Text,
  TypographyStylesProvider,
  Space
} from "@mantine/core";
import { SiProbot } from "react-icons/si";
import usePostMessage from "../../hooks/usePostMessage";
const SimpleChat = () => {
  const [responses, setResponses] = useState<string[]>([""]);
  const form = useForm({
    initialValues: {
      text: "",
    },

    validate: {
      text: (value) => (value !== "" ? null : "Invalid email"),
    },
  });

  const { mutate, data } = usePostMessage();
  useEffect(() => {
    if (data) {
      setResponses([...responses, data?.result]);
    }
    console.log("data: ", data);
  }, [data]);

  return (
    <Box maw={600} mx="auto">
      <Box>
        <Text lineClamp={3}>
          <TypographyStylesProvider>
            <h3>History</h3>
            {responses.map((response, index) => {
              return <p key={index}>{response}</p>;
            })}
          </TypographyStylesProvider>
        </Text>
      </Box>
      <Space h="md" />
      <form
        onSubmit={form.onSubmit((values) => {
          console.log(values);
          mutate({ text: values?.text });
        })}
      >
        <Textarea
          label="User"
          placeholder="Enter your text"
          radius="md"
          size="lg"
          {...form.getInputProps("text")}
        />

        <Group position="right" mt="md">
          <Button leftIcon={<SiProbot />} type="submit">
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
};
export default SimpleChat;
