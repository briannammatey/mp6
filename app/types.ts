export type User = {
    name?: string | null;
    email?: string | null;
};

export type Props = {
    user: User | null;
    signIn: () => void;
    signOut: () => void;
};