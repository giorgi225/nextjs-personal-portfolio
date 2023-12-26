const copyKeys = {
  email: process.env.NEXT_PUBLIC_EMAIL as string,
  phone: process.env.NEXT_PUBLIC_PHONE as string,
};

export default function useClipboard(
  functionName: string,
  targetDiv: HTMLElement
) {
  const input = document.createElement("input");
  input.classList.add("absolute");
  input.classList.add("opacity-0");
  if (functionName === "copyEmail") {
    input.value = copyKeys.email;
  } else if (functionName === "copyPhone") {
    input.value = copyKeys.phone;
  }

  document.body.appendChild(input);

  input.select();
  input.setSelectionRange(0, 99999); // for mobile devices

  navigator.clipboard
    .writeText(input.value)
    .then(() => {
      targetDiv.classList.add("copied");
      setTimeout(() => {
        targetDiv.classList.remove("copied");
      }, 1200);
    })
    .catch((err) => {
      alert(`Unable to copy text: ${err}`);
    });

  document.body.removeChild(input);
}
