import * as React from "react"

import { Text, Box } from "@chakra-ui/react"

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>
        Congratulations
        <br />
        <span>— you just made a Gatsby site! </span>
        🎉🎉🎉
      </h1>
      <Box display="flex" alignItems="center" justifyContent="items-center">
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Welcome to Chakra UI
        </Text>
      </Box>


    </main>
  )
}

export default IndexPage
