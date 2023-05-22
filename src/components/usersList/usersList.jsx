const UsersList = ({users}) => {
    const elements = users.map(({id ,name , username , email , avatarUrl , address:{street, city}}) => {
        return <li key={id} >
            <p>Name: {name}</p>
            <p>UserName: {username}</p>
            <p>email: {email}</p>
            <img src={avatarUrl} alt=""/>
            <p>address:{street},{city} </p>
        </li>
    })

    return <ul>{elements}</ul>
};

export default UsersList;

