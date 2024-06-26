async function takeTime() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

const About = async () => {
  await takeTime();
  return <h1>This is About Page</h1>;
};

export default About;
