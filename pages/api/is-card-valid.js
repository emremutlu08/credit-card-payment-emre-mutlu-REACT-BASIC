// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function isCardValid(req, res) {
  const response = await fetch(
    `https://mocki.io/v1/a5ae8585-b42d-486b-a4ff-25ebfebbaddf`
  );
  const result = await response.json();
  const body = JSON.parse(req?.body);

  const isAnyCardMatch = result.some((item) => {
    return (
      item?.number === body?.number &&
      item?.ccv === body?.ccv &&
      item?.exp === body?.exp
    );
  });

  res.status(200).json({ isValid: isAnyCardMatch });
}
