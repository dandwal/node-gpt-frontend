import { MantineProvider, Text } from "@mantine/core";
import SimpleChat from "./components/simpleChat/SimpleChat";
import theme from "./theme";
import QueryProvider from "./contextProviders/QueryProvider";
export default function App() {
  return (
    <QueryProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <Text fz="xl">Welcome to Dans yet to be named OpenAI application</Text>
        <SimpleChat />
      </MantineProvider>
    </QueryProvider>
  );
}
