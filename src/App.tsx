import { Authenticator } from "@aws-amplify/ui-react";
import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "@features/routes";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

function App() {
  return (
    <Authenticator.Provider>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </Authenticator.Provider>
  );
}
export default App;
