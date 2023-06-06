import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPosts } from 'services/users-api';

const Posts = () => {
  const [userPosts, setUserPosts] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getTodo = async () => {
      try {
        const { posts } = await getPosts(id);
        setUserPosts(posts);
      } catch (error) {
        console.log(error);
      }
    };
    getTodo();
  }, [id]);

  return (
    userPosts && (
      <ul>
        {userPosts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
  );
};

export default Posts;
