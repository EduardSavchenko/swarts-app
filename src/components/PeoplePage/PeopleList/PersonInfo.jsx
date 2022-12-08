const PersonInfo = ({ personInfo }) => {
  return (
    <div className="person-wrapper-info">
      <ul className="info-container">
        {personInfo.map(
          ({ title, data }) =>
            data && (
              <li className="info-list-items" key={title}>
                <span className="info-item">
                  {title} : {data}
                </span>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export { PersonInfo };
