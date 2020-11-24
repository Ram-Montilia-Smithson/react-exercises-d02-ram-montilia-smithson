import UserItem from "./userItem"
import array from "./user-mok-data"
function UserList(props) {
        return <ul>
            {props.users.map((user) =>    
                <UserItem
                    name={array[user].first_name}
                    country={array[user].country}
                    email={array[user].email}
                />
            )}
    </ul>
}
export default UserList