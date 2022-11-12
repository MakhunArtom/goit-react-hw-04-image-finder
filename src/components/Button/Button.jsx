export const Button = () => (
  <button type="button" onClick={incrimentpage}>
    Load More
  </button>
);

export function incrimentpage(e, page) {
  console.log(page);
  return (page += 1);
}
