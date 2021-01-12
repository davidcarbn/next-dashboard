import { checkUserAuthServerSide } from "../helpers/checkUserAuthServerSide"

const About = () => {
    return (<h1>About</h1>)
}

export const getServerSideProps = checkUserAuthServerSide
export default About