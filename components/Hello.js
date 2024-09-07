export default function Hello({ fName = 'First Name', lName = 'Last Name' }) {
  return (
    <p>
      Hello {fName} {lName}!
    </p>
  );
  // NOTE: props will be accessed using fName and lName instead of props.fName and props.lName
}
