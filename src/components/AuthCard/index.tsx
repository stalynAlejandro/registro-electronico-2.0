interface IAuthCard {
    title: string;
}

export const AuthCard = ({ title }: IAuthCard) => {
    return <div>{title}</div>;
};
