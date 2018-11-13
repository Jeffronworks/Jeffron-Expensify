import React from "react";
import ReactDOM from "react-dom";

const Info = props => {
  return (
    <div>
      <h1>info</h1>
      <p>the info is: {props.info}</p>
    </div>
  );
};

// const withAdminWarning = WrappedComponent => {
//   return props => (
//     <div>
//       {props.isAdmin && <p>This is private info. Please don't share</p>}
//       <WrappedComponent {...props} />
//     </div>
//   );
// };

//const AdminInfo = withAdminWarning(Info);

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>login to view the details</p>
      )}
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="there, are the details " />,
//   document.getElementById("root")
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="there, are the details " />,
  document.getElementById("root")
);

// const requireAuthentication = WrappedComponent => {
//   return props => (
//     <div>
//       {(props.isAuthenticated && <WrappedComponent {...props} />) || (
//         <p>please log in to view details</p>
//       )}
//     </div>
//   );
// };
