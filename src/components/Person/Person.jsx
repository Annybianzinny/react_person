export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <div className="Person">
      <p className="Person__name">{name}</p>

      {age !== undefined && <p className="Person__age">{age}</p>}

      <p className="Person__partner">
        {isMarried
          ? `${sex === 'm' ? 'wife' : 'husband'}: ${partnerName}`
          : 'I am not married'}
      </p>
    </div>
  );
};
