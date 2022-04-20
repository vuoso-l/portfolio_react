const AcademicComponent = ({ h5, h6, urlCredential, p }) => {
  return (
    <>
      <h5>{h5}</h5>
      <h6>{h6}</h6>
      {urlCredential ? (
        <a href={urlCredential}>URL para corroborar la credencial</a>
      ) : (
        ""
      )}
      <p>{p}</p>
    </>
  );
};

export default AcademicComponent;
