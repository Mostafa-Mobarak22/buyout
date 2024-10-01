// // import React from 'react';
// // import Button from 'react-bootstrap/Button';
// // import Card from 'react-bootstrap/Card';

// // function CardProfile() {
// //   return (
// //     <Card style={{ width: '18rem' }}>
// //       <Card.Img variant="top" src="https://via.placeholder.com/150" />
// //       <Card.Body>
// //         <Card.Title>Card Title</Card.Title>
// //         <Card.Text>
// //           Some quick example text to build on the card title and make up the bulk of the card's content.
// //         </Card.Text>
// //         <Button variant="primary">Go somewhere</Button>
// //       </Card.Body>
// //     </Card>
// //   );
// // }

// // export default CardProfile;
// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Image from 'react-bootstrap/Image';

// const CardProfile = (props) => {
//   // Access user from props
//   const { user } = props;

//   return (
//     <Card style={{ width: '30rem', margin: '0 auto', textAlign: 'center' }}>
//       {/* If user has an image, display it, otherwise show a placeholder */}
//       {user.image ? (
//         <Card.Img variant="top" src={user.image} alt="Profile Image" />
//       ) : (
//         <Image 
//           src="https://via.placeholder.com/150" 
//           roundedCircle 
//           style={{ width: '150px', height: '150px', margin: '20px auto' }} 
//         />
//       )}
//       <Card.Body>
//         <Card.Title>{user.user_name}</Card.Title>
//         <Card.Text>Email: {user.email}</Card.Text>
//         <Card.Text>Phone: {user.phone || 'Not Provided'}</Card.Text>
//         <Card.Text>City: {user.city || 'N/A'}</Card.Text>
//         <Card.Text>street: {user.street || 'N/A'}</Card.Text>

//         {/* <Card.Text>Company: {user.is_company ? 'Yes' : 'No'}</Card.Text> */}
//         <Button class="bg-primary text-white py-2 px-4 rounded>Edit Profile</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default CardProfile;
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const CardProfile = (props) => {
  // Access user from props
  const { user } = props;

  return (
    <Card style={{ width: '30rem', margin: '0 auto', textAlign: 'center' }}>
      {/* If user has an image, display it, otherwise show a placeholder */}
      {user.image ? (
        <Card.Img variant="top" src={user.image} alt="Profile Image" />
      ) : (
        <Image 
          src="https://via.placeholder.com/150" 
          roundedCircle 
          style={{ width: '150px', height: '150px', margin: '20px auto' }} 
        />
      )}
      <Card.Body>
        <Card.Title>{user.user_name}</Card.Title>
        <Card.Text>Email: {user.email}</Card.Text>
        <Card.Text>Phone: {user.phone || 'Not Provided'}</Card.Text>
        <Card.Text>City: {user.city || 'N/A'}</Card.Text>
        <Card.Text>Street: {user.street || 'N/A'}</Card.Text>

        {/* Custom Button with the primary color */}
        <Button 
          style={{ backgroundColor: '#31C48B', borderColor: '#31C48B' }} 
          className="text-white py-2 px-4 rounded"
        >
          Edit Profile
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardProfile;
