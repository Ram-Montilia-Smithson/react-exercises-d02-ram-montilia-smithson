function UserForm(props) {
    function checking() {
        props.onChecking()
    }
    return (
        <div>
            <input type="checkbox" onClick={() => checking()} />
            {props.users.map((user) =>
                <input key={user} type="checkbox" onClick={() => checking()} />
            )}
        </div>
    )
}
export default UserForm