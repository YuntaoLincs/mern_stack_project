import UserItem from "./UserItem";

import type { UserItemType } from "./UserItem";
type UserListType = {
  items: UserItemType[];
};

import "./UsersList.css";

const UsersList = (props: UserListType) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItem key={user.id} {...user} />
      ))}
    </ul>
  );
};

export default UsersList;

// import UserItem from "./UserItem";

// import type { UserItemType } from "./UserItem";

// import "./UsersList.css";

// const UsersList = (props: UserItemType[]) => {
//   if (props.length === 0) {
//     return (
//       <div className="center">
//         <h2>No users found.</h2>
//       </div>
//     );
//   }

//   return (
//     <ul className="users-list">
//       {props.map((user) => (
//         <UserItem key={user.id} {...user} />
//       ))}
//     </ul>
//   );
// };

// export default UsersList;
