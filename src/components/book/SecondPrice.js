import React from 'react';
import { Button } from 'react-bootstrap';

const SecondPrice = ({ site }) => {
  const { gradeA, gradeB, gradeC } = site;
  const sum = gradeA + gradeB + gradeC;
  return (
    <td className="secondPrice">
      {sum ? (
        <>
          <p>{gradeA}원</p>
          <p>{gradeB}원</p>
          <p>{gradeC}원</p>
        </>
      ) : (
        <Button variant="danger" size="sm" disabled>
          매입 불가
        </Button>
      )}
    </td>
  );
};

export default SecondPrice;
