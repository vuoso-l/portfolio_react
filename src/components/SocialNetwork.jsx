const SocialNetwork = ({ url, imgFontAw, socNetName, info }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {imgFontAw} {socNetName} {info && `: ${info}`}
    </a>
  );
};

export default SocialNetwork;
