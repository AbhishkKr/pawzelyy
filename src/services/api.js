export async function getPets() {
  const res = await fetch("/api/pets");
  return res.json();
}