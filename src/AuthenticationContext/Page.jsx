
import UserInfo from "./UserInfo"
import LoginButton from "./LoginButton"
import LougourButton from "./LougourButton"
import { UserProvider } from "./UserContext"


const Page = () => {
  return (
    <UserProvider>
      <UserInfo/>
      <LoginButton/>
      <LougourButton/>
    </UserProvider>
  )
}

export default Page
