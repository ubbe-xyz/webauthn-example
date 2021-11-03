import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import Image from "next/image";
import Layout from "../../components/Layout/Layout";
import aptoLogo from "../../../public/apto-logo.png";
import { useSignIn } from "./useSignIn";

export default function SignInPage() {
  const { handleEmailChange, handleKeySubmit, handleSignIn, isValid, email } =
    useSignIn();

  return (
    <Layout>
      <Box maxW="300px">
        <Image alt="Apto logo" src={aptoLogo as any} />
      </Box>
      <form onSubmit={(e) => e.preventDefault()}>
        <Flex>
          <Input
            name="email"
            type="email"
            id="email"
            autoComplete="home email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            onKeyDown={handleKeySubmit}
          />
          <Button
            type="button"
            onClick={handleSignIn}
            disabled={!isValid}
            colorScheme="blue"
            ml="4"
          >
            Sign in
          </Button>
        </Flex>
      </form>
    </Layout>
  );
}
