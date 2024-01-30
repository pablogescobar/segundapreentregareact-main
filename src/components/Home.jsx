import { Center, Box, Image } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className="welcome-container">
      <h1>Bienvenid@s!</h1>
      <Center>
        <Box boxSize="xxl">
          <Image
            src="https://www.comunicare.es/wp-content/uploads/2021/02/istockphoto-1043867708-612x612-1.jpg"
            alt="celus"
          />
        </Box>
      </Center>
    </div>
  );
};

export default Home
