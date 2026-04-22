import { auth } from "@/auth";
import { googleSignIn, googleSignOut } from "./actions";
import StyledWrapper from "./StyledHome";

export default async function Home() {
    const auther = await auth();
    const user = auther?.user ?? null;

    return (
        <StyledWrapper
            user={user}
            signIn={googleSignIn}
            signOut={googleSignOut}
        />
    );
}