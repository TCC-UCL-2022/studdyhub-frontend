import { reactQueryClient } from "@/lib";
import { Router } from "@/routes";
import { Authenticator } from "@aws-amplify/ui-react";
import { ChakraProvider } from "@chakra-ui/react";
import { Amplify } from "aws-amplify";
import { QueryClientProvider } from "react-query";
import awsconfig from "./aws-exports";

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
