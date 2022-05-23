import { Authenticator } from "@aws-amplify/ui-react";
import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "@routes";
import { Amplify } from "aws-amplify";
import { QueryClientProvider } from "react-query";
import awsconfig from "./aws-exports";
import { reactQueryClient } from "./common/lib/react-query-client";
Amplify.configure(awsconfig);

function App() {
  return (
    <QueryClientProvider client={reactQueryClient}>
      <Authenticator.Provider>
        <ChakraProvider>
          <Router />
        </ChakraProvider>
      </Authenticator.Provider>
    </QueryClientProvider>
  );
}
export default App;
