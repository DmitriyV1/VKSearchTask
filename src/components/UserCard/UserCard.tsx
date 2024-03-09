import "./style.css";

interface IAddress {
  city: string;
}

interface IUser {
  address: IAddress;
  image: string;
  firstName: string;
  lastName: string;
}

export function UserCard({ user }: { user: IUser }) {
  const { image, firstName, lastName, address } = { ...user };

  return (
    <div className="userCard">
      <img className="userPic" src={image} />
      <div className="userInfo">
        <div>{`${firstName} ${lastName}`}</div>
        <div>{address.city}</div>
      </div>
    </div>
  );
}
