import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";

export default function ModalForm() {
  return (
    <>
      <FormControl m={2}>
        <FormLabel>What did you do today?</FormLabel>
        <Input />
        <FormHelperText>Short description.</FormHelperText>
      </FormControl>
      <FormControl m={2} mt={4}>
        <FormLabel>Detail your task today?</FormLabel>
        <Textarea />
        <FormHelperText>Detailed description</FormHelperText>
      </FormControl>
      <Box textAlign="right">
        <Button type="submit">
          <Text
            fontFamily="bungee"
            fontWeight="light"
            color="#5a06ff"
          >
            Save
          </Text>
        </Button>
      </Box>
    </>
  );
}
