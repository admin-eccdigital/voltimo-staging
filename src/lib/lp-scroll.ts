export function scrollToRegistration() {
  const el = document.getElementById("registrace");
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 64;
  window.scrollTo({ top: y, behavior: "smooth" });
}
