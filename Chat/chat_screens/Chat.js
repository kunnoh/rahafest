import StackNavigator from "./StackNavigator";
import { UserContext } from "./UserContext";

export default function Chat() {
  return (
    <>
      <UserContext>
        <StackNavigator />
      </UserContext>
    </>
  );
}
