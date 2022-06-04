// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function isCardValid(req, res) {
  const response = await fetch(
    `https://mocki.io/v1/a5ae8585-b42d-486b-a4ff-25ebfebbaddf`
  );
  const result = await response.json();
  const isAnyCardMatch = result.some(
    (item) => JSON.stringify(item) === req.body
  );

  res.status(200).json({ isValid: isAnyCardMatch });
}
