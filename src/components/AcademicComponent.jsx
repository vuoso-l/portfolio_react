const AcademicComponent = ({ h5, h6, urlCredential, credentialP, p }) => {
  return (
    <>
      <h5>{h5}</h5>
      <h6>{h6}</h6>
      {urlCredential ? <a href={urlCredential}>{credentialP}</a> : ""}
      <p>{p}</p>
    </>
  );
};

export default AcademicComponent;
