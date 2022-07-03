import { reactQueryClient } from "@/lib";
import { Router } from "@/routes";
import { theme } from "@/theme";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Amplify } from "aws-amplify";
import { QueryClientProvider } from "react-query";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
  return (
    <QueryClientProvider client={reactQueryClient}>
      <Authenticator.Provider>
        <ChakraProvider theme={theme}>
          <Router />
        </ChakraProvider>
      </Authenticator.Provider>
    </QueryClientProvider>
  );
}
export default App;
