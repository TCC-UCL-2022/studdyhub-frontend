import { Authenticator } from "@aws-amplify/ui-react";
import { ChakraProvider } from "@chakra-ui/react";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { Router } from "./routes";
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
