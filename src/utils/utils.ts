export function scrollToHome() {
  const targetEl = document.getElementById("home");
  targetEl?.scrollIntoView({
    behavior: "smooth",
  });
}

export function scrollToProjects() {
  const targetEl = document.getElementById("projects");
  targetEl?.scrollIntoView({
    behavior: "smooth",
  });
}

export function scrollToAbout() {
  const targetEl = document.getElementById("about");
  targetEl?.scrollIntoView({
    behavior: "smooth",
  });
}

export function scrollToContact() {
  const targetEl = document.getElementById("contact");
  targetEl?.scrollIntoView({
    behavior: "smooth",
  });
}

export const handleEmailClick = () => {
  const email = "rijoanfardous101@gmail.com";
  const subject = "Hello";
  const body = "I wanted to reach out!";

  window.location.href = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
};
