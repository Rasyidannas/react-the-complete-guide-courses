export default function MeasDetailsPage({ params }) {
  return (
    <>
      <h1>Meals Detail</h1>
      <p>{params.mealSlug}</p>
    </>
  );
}
